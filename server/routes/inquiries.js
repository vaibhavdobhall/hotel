import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();
    res.json(inquiries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (error) {
    next(error);
  }
});

export default router;
