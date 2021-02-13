const express = require('express');
const mongoose = require('mongoose');

const { PORT, MONGO_URL } = require('./config');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
