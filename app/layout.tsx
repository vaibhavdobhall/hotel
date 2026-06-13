import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Contempo | Premium Stay',
  description: 'Luxury hotel booking and management experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f7ede2] text-[#1f1a12]">{children}</body>
    </html>
  );
}
