import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    maxOccupancy: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], default: [] },
    amenities: { type: [String], default: [] }
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model('Room', roomSchema);
