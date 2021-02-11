const express = require('express');

const errorHandler = require('./middlewares/errorHandler');

const PORT = 3000;
const app = express();

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
