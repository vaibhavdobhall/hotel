import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface BookingRequest {
  guestName: string;
  guestEmail: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  totalGuests: number;
}

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as BookingRequest;
    const { guestName, guestEmail, roomType, checkIn, checkOut, totalGuests } = body;

    if (!guestName || !guestEmail || !roomType || !checkIn || !checkOut || !totalGuests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guestEmail)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    const isPlaceholder = (value: string | undefined) =>
      !value || value.startsWith('your_') || value.includes('your_emailjs');

    if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
      console.error('EmailJS credentials are invalid or still placeholder values.', {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      });

      return NextResponse.json(
        {
          error:
            'EmailJS credentials are not configured or are still placeholder values. Please update EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.',
        },
        { status: 500 }
      );
    }

    const emailResponse = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          guestName,
          guestEmail,
          roomType,
          checkIn,
          checkOut,
          totalGuests,
        },
      }),
    });

    let emailResult: unknown;
    try {
      emailResult = await emailResponse.json();
    } catch (parseError) {
      emailResult = { message: 'EmailJS returned an invalid response.' };
    }

    if (!emailResponse.ok) {
      console.error('EmailJS API error:', {
        status: emailResponse.status,
        statusText: emailResponse.statusText,
        response: emailResult,
      });
      return NextResponse.json(
        {
          error: 'Failed to send booking request.',
          details: {
            status: emailResponse.status,
            statusText: emailResponse.statusText,
            response: emailResult,
          },
        },
        { status: emailResponse.status || 502 }
      );
    }

    return NextResponse.json(
      { message: 'Booking Request Received via Email!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Unable to process booking. Please ensure EmailJS is configured correctly or try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'This endpoint accepts POST requests only' }, { status: 405 });
}
