# Hotel Premium Booking

A premium hotel booking website built with Next.js, Tailwind CSS, and EmailJS for booking emails.

## Project overview

- Frontend: `Next.js` + `Tailwind CSS`
- Booking notifications: `EmailJS`
- Designed for a luxurious, modern hotel experience with responsive booking pages

## Installed structure

- `app/` - Next.js app pages and global styling
- `components/` - Reusable premium UI sections

## Booking route

- `POST /api/bookings` (booking requests are sent via EmailJS)

## Development

1. Copy `.env.example` to `.env`
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open frontend:

```text
http://localhost:3000
```

## Notes

- The booking endpoint sends reservation requests via EmailJS.
- This repository no longer includes a separate Express backend or database layer.

## Cloudflare Pages deployment

 To deploy on Cloudflare Pages (Edge runtime) the booking endpoint must be Edge-compatible and forward reservations through EmailJS. The booking API in `app/api/bookings/route.ts` now sends email notifications instead of writing to a database.
 
 Set the following environment variables in your Cloudflare Pages project settings:
 
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`

Testing the booking endpoint locally:

```bash
export EMAILJS_SERVICE_ID="your_emailjs_service_id"
export EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
export EMAILJS_PUBLIC_KEY="your_emailjs_public_key"
npm run dev

# Example POST (adjust payload)
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"guestName":"Alice","guestEmail":"a@example.com","roomType":"deluxe","checkIn":"2026-07-01","checkOut":"2026-07-03","totalGuests":2}'
```
