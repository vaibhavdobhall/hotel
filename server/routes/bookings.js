import express from 'express';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';

const router = express.Router();

const isRoomAvailable = async (roomId, checkIn, checkOut) => {
  const overlappingBooking = await Booking.findOne({
    room: roomId,
    status: { $ne: 'cancelled' },
    $or: [
      { checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } },
      { checkIn: { $gte: checkIn, $lt: checkOut } },
      { checkOut: { $gt: checkIn, $lte: checkOut } }
    ]
  });
  return !overlappingBooking;
};

router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('room user').lean();
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { userId, roomId, checkIn, checkOut } = req.body;
    if (!userId || !roomId || !checkIn || !checkOut) {
      return res.status(400).json({ error: 'Missing required booking fields' });
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (end <= start) {
      return res.status(400).json({ error: 'Check-out must be after check-in' });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    const available = await isRoomAvailable(roomId, start, end);
    if (!available) {
      return res.status(409).json({ error: 'Room is unavailable for selected dates' });
    }

    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = room.price * nights;
    const booking = new Booking({ user: userId, room: roomId, checkIn: start, checkOut: end, totalPrice });
    await booking.save();

    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
});

export default router;
