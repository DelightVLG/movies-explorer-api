const router = require('express').Router();
const movieRouter = require('./movies');

const NotFoundError = require('../errors/NotFoundError');

router.use('/movies', movieRouter);

router.all('/*', () => new NotFoundError('Запрашиваемый ресурс не найден.'));

module.exports = router;
