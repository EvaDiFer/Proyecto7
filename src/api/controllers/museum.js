const Museum = require('../models/museum');

const getMuseums = async (req, res, next) => {
  try {
    const museums = await Museum.find().populate('artwork');
    return res.status(200).json(museums);
  } catch (error) {
    return res.status(400).json('Error en la solicitud genérica');
  }
};

const getMuseumById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const museum = await Museum.findById(id).populate('artwork');
    return res.status(200).json(museum);
  } catch (error) {
    return res.status(400).json('Error en la solicitud por id');
  }
};

const postMuseum = async (req, res, next) => {
  try {
    const newMuseum = new Museum(req.body);
    const museumSaved = await newMuseum.save();
    return res.status(201).json(museumSaved);
  } catch (error) {
    console.error('Error al procesar la solicitud post:', error);
    return res.status(400).json('Error en la solicitud post');
  }
};

const putMuseum = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldMuseum = await Museum.findById(id);
    const newMuseumData = req.body;
    // Updating the artwork field with the new data
    oldMuseum.artwork = [...oldMuseum.artwork, ...newMuseumData.artwork];
    const museumUpdated = await oldMuseum.save();
    return res.status(200).json(museumUpdated);
  } catch (error) {
    return res.status(400).json('Error en la solicitud put');
  }
};

const deleteMuseum = async (req, res, next) => {
  try {
    const { id } = req.params;
    const museumDeleted = await Museum.findByIdAndDelete(id);
    return res.status(200).json(museumDeleted);
  } catch (error) {
    return res.status(400).json('Error en la solicitud delete');
  }
};

module.exports = {
  getMuseums,
  getMuseumById,
  postMuseum,
  putMuseum,
  deleteMuseum,
};
