import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

interface BookingRequest {
  guestName: string;
  guestEmail: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  totalGuests: number;
}

interface BookingDocument extends BookingRequest {
  _id?: string;
  createdAt: Date;
  status: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as BookingRequest;

    // Validate required fields
    const { guestName, guestEmail, roomType, checkIn, checkOut, totalGuests } = body;

    if (!guestName || !guestEmail || !roomType || !checkIn || !checkOut || !totalGuests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guestEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get database instance
    const db = await getDatabase();
    const bookingsCollection = db.collection<BookingDocument>('bookings');

    // Create booking document
    const bookingDocument: BookingDocument = {
      guestName,
      guestEmail,
      roomType,
      checkIn,
      checkOut,
      totalGuests,
      createdAt: new Date(),
      status: 'confirmed',
    };

    // Insert into database
    const result = await bookingsCollection.insertOne(bookingDocument);

    return NextResponse.json(
      {
        message: 'Booking successful!',
        bookingId: result.insertedId,
        booking: {
          ...bookingDocument,
          _id: result.insertedId,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking API error:', error);

    return NextResponse.json(
      { error: 'Failed to create booking. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint accepts POST requests only' },
    { status: 405 }
  );
}
