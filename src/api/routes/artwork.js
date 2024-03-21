const { isAuth, isAdmin } = require('../../middlewares/auth');
const {
  getArtworks,
  getArtworkById,
  getArtworkByGenre,
  postArtwork,
  putArtwork,
  deleteArtwork,
  getArtworkNotVerified,
} = require('../controllers/artwork');

const artworkRouter = require('express').Router();
artworkRouter.get('/not-verified', [isAdmin], getArtworkNotVerified);
artworkRouter.get('/genre/:genre', getArtworkByGenre);
artworkRouter.get('/:id', getArtworkById);
artworkRouter.get('/', getArtworks);
artworkRouter.post('/', [isAuth], postArtwork);
artworkRouter.put('/:id', [isAdmin], putArtwork);
artworkRouter.delete('/:id', [isAdmin], deleteArtwork);

module.exports = artworkRouter;
