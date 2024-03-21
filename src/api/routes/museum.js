const { isAdmin } = require('../../middlewares/auth');
const {
  getMuseums,
  getMuseumById,
  postMuseum,
  putMuseum,
  deleteMuseum,
} = require('../controllers/museum');

const museumRouter = require('express').Router();

museumRouter.get('/:id', getMuseumById);
museumRouter.get('/', getMuseums);
museumRouter.post('/', [isAdmin], postMuseum);
museumRouter.put('/:id', [isAdmin], putMuseum);
museumRouter.delete('/:id', [isAdmin], deleteMuseum);

module.exports = museumRouter;
