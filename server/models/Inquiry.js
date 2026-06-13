import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    type: { type: String, enum: ['general', 'banquet'], default: 'general' },
    message: { type: String, required: true },
    eventDate: { type: Date },
    guests: { type: Number }
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);
