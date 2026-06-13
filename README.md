# Hotel Premium Booking

A premium hotel booking and management website built with Next.js, Tailwind CSS, Express, and MongoDB.

## Project overview

- Frontend: `Next.js` + `Tailwind CSS`
- Backend: `Express` + `MongoDB` via `Mongoose`
- Designed for a luxurious, modern hotel experience with responsive booking and marketing pages
- Includes room management, booking engine, inquiries, and admin routes

## Installed structure

- `app/` - Next.js app pages and global styling
- `components/` - Reusable premium UI sections
- `server/` - Express backend, models, and API routes

## Key backend routes

- `GET /api/rooms`
- `POST /api/rooms`
- `GET /api/bookings`
- `POST /api/bookings`
- `GET /api/inquiries`
- `POST /api/inquiries`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/payments/create-session`
- `GET /api/admin/bookings`
- `GET /api/admin/rooms`
- `GET /api/admin/inquiries`

## Database models

- `User` - customers and admins
- `Room` - room details, price, capacity, amenities, images
- `Booking` - reservation details, room references, status
- `Inquiry` - contact and event inquiries

## Development

1. Copy `.env.example` to `.env`
2. Install dependencies:

```bash
npm install
```

3. Start development servers:

```bash
npm run dev
```

4. Open frontend:

```text
http://localhost:3000
```

5. Open backend API:

```text
http://localhost:5000/api/health
```

## Notes

- The booking endpoint includes availability logic to prevent overlapping reservations.
- Admin-only routes require a bearer token with `role: admin`.
- Payment route is scaffolded for Stripe/Razorpay integration.
