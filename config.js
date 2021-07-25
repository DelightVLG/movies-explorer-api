require('dotenv').config();

const { PORT = 3000 } = process.env;
const MONGO_URL = process.env;

module.exports = {
  PORT,
  MONGO_URL,
};
