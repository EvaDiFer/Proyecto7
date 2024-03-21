const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    artwork: [
      { type: mongoose.Types.ObjectId, ref: 'artwork', required: false },
    ],
  },
  {
    timestamps: true,
    collection: 'museum',
  }
);

const Museum = mongoose.model('museum', museumSchema, 'museum');
module.exports = Museum;
