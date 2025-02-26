const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['Hotel', 'Restaurant'], required: true },
  name: { type: String, required: true },
  address: { 
    city: String, 
    state: String, 
    zip: String 
  },
  contactInfo: String,
  description: String,
  facilities: [String],
  pricing: Number,
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
