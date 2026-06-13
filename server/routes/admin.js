import express from 'express';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import Inquiry from '../models/Inquiry.js';
import User from '../models/User.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateAdmin);

router.get('/bookings', async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('room user').lean();
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

router.get('/rooms', async (req, res, next) => {
  try {
    const rooms = await Room.find().lean();
    res.json(rooms);
  } catch (error) {
    next(error);
  }
});

router.get('/inquiries', async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();
    res.json(inquiries);
  } catch (error) {
    next(error);
  }
});

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
