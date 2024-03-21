require('dotenv').config();

const { connectDB } = require('./src/config/db');
const express = require('express');
const artworkRouter = require('./src/api/routes/artwork');
const museumRouter = require('./src/api/routes/museum');
const usersRoutes = require('./src/api/routes/users');

const app = express();

app.use(express.json());
connectDB();

app.use('/api/v1/museum', museumRouter);
app.use('/api/v1/artwork', artworkRouter);
app.use('/api/v1/users', usersRoutes);

// poner siempre la última que luego da fallo y me vuelvo loca
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000 🤩');
});
