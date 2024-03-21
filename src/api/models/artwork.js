const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        'Portrait',
        'Landscape',
        'Still life',
        'Abstract',
        'History painting',
      ],
    },

    verified: { type: Boolean, required: true, default: false },
  },

  {
    timestamps: true,
    collection: 'artwork',
  }
);

const Artwork = mongoose.model('artwork', artworkSchema, 'artwork');
module.exports = Artwork;
