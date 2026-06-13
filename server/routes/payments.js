import express from 'express';

const router = express.Router();

router.post('/create-session', async (req, res) => {
  const { amount, currency = 'usd', metadata } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Valid amount is required' });
  }

  const session = {
    id: `sess_${Date.now()}`,
    amount,
    currency,
    metadata,
    status: 'created'
  };

  res.status(201).json({ session, message: 'Payment session prepared for Stripe or Razorpay integration' });
});

export default router;
