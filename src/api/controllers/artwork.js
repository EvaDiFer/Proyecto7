const Artwork = require('../models/artwork');

const getArtworks = async (req, res, next) => {
  try {
    const artwork = await Artwork.find({ verified: true });
    return res.status(200).json(artwork);
  } catch (error) {
    return res.status(400).json('Error en la solicitud genérica');
  }
};

const getArtworkNotVerified = async (req, res, next) => {
  try {
    const artwork = await Artwork.find({ verified: false });
    return res.status(200).json(artwork);
  } catch (error) {
    return res.status(400).json('Error en la solicitud genérica');
  }
};

const getArtworkById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artwork = await Artwork.findById(id);
    return res.status(200).json(artwork);
  } catch (error) {
    return res.status(400).json('Error en la solicitud por id');
  }
};

const getArtworkByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const artwork = await Artwork.find({ genre: genre });
    return res.status(200).json(artwork);
  } catch (error) {
    return res.status(400).json('Error en la solicitud por genre');
  }
};

const postArtwork = async (req, res, next) => {
  try {
    const newArtwork = new Artwork(req.body);
    if (req.user.rol === 'admin') {
      newArtwork.verified = true;
    } else {
      newArtwork.verified = false;
    }

    const artworkSaved = await newArtwork.save();
    return res.status(201).json(artworkSaved);
  } catch (error) {
    console.error('Error al procesar la solicitud post:', error);
    return res.status(400).json('Error en la solicitud post');
  }
};

const putArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtwork = new Artwork(req.body);
    newArtwork._id = id;
    const artWorkUpdated = await Artwork.findByIdAndUpdate(id, newArtwork, {
      new: true,
    });
    return res.status(200).json(artWorkUpdated);
  } catch (error) {
    return res.status(400).json('Error en la solicitud put');
  }
};

const deleteArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artworkDeleted = await Artwork.findByIdAndDelete(id);
    return res.status(200).json(artworkDeleted);
  } catch (error) {
    return res.status(400).json('Error en la solicitud delete');
  }
};

module.exports = {
  getArtworks,
  getArtworkById,
  getArtworkByGenre,
  postArtwork,
  putArtwork,
  deleteArtwork,
  getArtworkNotVerified,
};
