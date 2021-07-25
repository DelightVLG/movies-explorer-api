require('dotenv').config();

const { PORT = 3000 } = process.env;
// const MONGO_URL = process.env;
const MONGO_URL = 'mongodb+srv://delightvlg:Zpw8uOf88G9MqzSA@movies-explorer-db.d3pxa.mongodb.net/movies-explorer-db?retryWrites=true&w=majority';

module.exports = {
  PORT,
  MONGO_URL,
};
