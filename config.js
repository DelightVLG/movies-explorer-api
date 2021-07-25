require('dotenv').config();

const { PORT = 3000 } = process.env;
const MONGO_URL = process.env.MONGODB_URI;

module.exports = {
  PORT,
  MONGO_URL,
};

// domains api.vlmovies.students.nomoredomains.rocks www.api.vlmovies.students.nomoredomains.rocks
// vlmovies.students.nomoredomains.rocks
