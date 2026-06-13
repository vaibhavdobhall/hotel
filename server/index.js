import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config.js';
import roomRoutes from './routes/rooms.js';
import bookingRoutes from './routes/bookings.js';
import inquiryRoutes from './routes/inquiries.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import paymentRoutes from './routes/payments.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Hotel API is running' }));
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
};

start().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
