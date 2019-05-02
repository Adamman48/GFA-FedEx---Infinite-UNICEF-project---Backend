const PORT = 4000;

const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
const router = require('./routes/index');

app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect('mongodb://localhost/ebreszto-ora', { useNewUrlParser: true });
const feedbackDB = mongoose.connection;

feedbackDB.on('error', console.error.bind(console, 'connection error:'));
feedbackDB.once('open', () => {
  console.log('feedbackDB successfully connected!');
});

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});

module.exports = app;
