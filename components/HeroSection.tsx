'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import { useState, FormEvent, ChangeEvent } from 'react';

interface FormState {
  guestName: string;
  guestEmail: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  totalGuests: number;
}

export default function HeroSection() {
  const [formData, setFormData] = useState<FormState>({
    guestName: '',
    guestEmail: '',
    roomType: 'Premium Suite',
    checkIn: '',
    checkOut: '',
    totalGuests: 2,
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'totalGuests' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Booking Request Received via Email! Our team will follow up shortly.',
        });
        setFormData({
          guestName: '',
          guestEmail: '',
          roomType: 'Premium Suite',
          checkIn: '',
          checkOut: '',
          totalGuests: 2,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send booking request. Please try again.',
        });
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred while processing your booking. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="https://images.unsplash.com/video-1519817651461-411020c4610a?auto=format&fit=crop&w=1600&q=80" type="video/mp4" />
        </video>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-end px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 sm:space-y-6 pb-12 sm:pb-20 text-white">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold">Luxury hotel stays</p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
            Your refined escape to modern comfort and timeless hospitality.
          </h1>
          <p className="max-w-xl text-sm sm:text-base lg:text-lg text-white/80">
            Discover elegant suites, curated dining, and exceptional event venues in the heart of the city. Book with confidence for a stay that feels bespoke.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 rounded-2xl sm:rounded-[32px] border border-white/10 bg-black/80 p-4 sm:p-6 shadow-soft backdrop-blur-xl md:max-w-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 sm:mb-0">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-white/70">Check Availability</p>
              <h2 className="text-lg sm:text-2xl font-semibold text-white mt-1">Reserve your stay</h2>
            </div>
          </div>

          {submitStatus.type && (
            <div
              className={`rounded-2xl border p-4 text-sm ${
                submitStatus.type === 'success'
                  ? 'border-emerald-500/40 bg-emerald-950/70 text-emerald-200'
                  : 'border-red-500/40 bg-red-950/70 text-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="space-y-2 text-xs sm:text-sm text-white/80">
              <span>Guest Name</span>
              <input
                className="w-full rounded-lg sm:rounded-2xl border border-white/10 bg-[#111111]/85 px-3 sm:px-4 py-2 sm:py-3 text-white outline-none transition focus:border-gold"
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </label>
            <label className="space-y-2 text-xs sm:text-sm text-white/80">
              <span>Email</span>
              <input
                className="w-full rounded-lg sm:rounded-2xl border border-white/10 bg-[#111111]/85 px-3 sm:px-4 py-2 sm:py-3 text-white outline-none transition focus:border-gold"
                type="email"
                name="guestEmail"
                value={formData.guestEmail}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </label>
            <label className="space-y-2 text-xs sm:text-sm text-white/80">
              <span>Room Type</span>
              <select
                className="w-full rounded-lg sm:rounded-2xl border border-white/10 bg-[#111111]/85 px-3 sm:px-4 py-2 sm:py-3 text-white outline-none transition focus:border-gold"
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
              >
                <option>Premium Suite</option>
                <option>Deluxe Room</option>
                <option>Comfort Room</option>
              </select>
            </label>
            <label className="space-y-2 text-xs sm:text-sm text-white/80">
              <span>Check-in</span>
              <input
                className="w-full rounded-lg sm:rounded-2xl border border-white/10 bg-[#111111]/85 px-3 sm:px-4 py-2 sm:py-3 text-white outline-none transition focus:border-gold"
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                required
              />
            </label>
            <label className="space-y-2 text-xs sm:text-sm text-white/80">
              <span>Check-out</span>
              <input
                className="w-full rounded-lg sm:rounded-2xl border border-white/10 bg-[#111111]/85 px-3 sm:px-4 py-2 sm:py-3 text-white outline-none transition focus:border-gold"
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                required
              />
            </label>
            <label className="space-y-2 text-xs sm:text-sm text-white/80">
              <span>Guests</span>
              <select
                className="w-full rounded-lg sm:rounded-2xl border border-white/10 bg-[#111111]/85 px-3 sm:px-4 py-2 sm:py-3 text-white outline-none transition focus:border-gold"
                name="totalGuests"
                value={formData.totalGuests}
                onChange={handleInputChange}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="col-span-full sm:col-span-1 lg:col-span-3 rounded-lg sm:rounded-2xl bg-gold px-4 sm:px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-ebony transition hover:bg-[#f1d09e] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Reserve Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
