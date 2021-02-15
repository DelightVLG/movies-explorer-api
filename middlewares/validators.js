const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const movieBodyValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required()
      .messages({
        'any.required': 'Поле country является обязательным.',
      }),
    director: Joi.string().required()
      .messages({
        'any.required': 'Поле director является обязательным.',
      }),
    duration: Joi.number().required()
      .messages({
        'any.required': 'Поле "Поле duration является обязательным.',
      }),
    year: Joi.string().required()
      .messages({
        'any.required': 'Поле year является обязательным.',
      }),
    description: Joi.string().required()
      .messages({
        'any.required': 'Поле description является обязательным.',
      }),
    image: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Введен не верный формат ссылки в поле image.');
    })
      .messages({
        'any.required': 'Поле image является обязательным.',
      }),
    trailer: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Введен не верный формат ссылки в поле trailer.');
    })
      .messages({
        'any.required': 'Поле trailer является обязательным.',
      }),
    thumbnail: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Введен не верный формат ссылки в поле thumbnail.');
    })
      .messages({
        'any.required': 'Поле thumbnail является обязательным.',
      }),
    movieId: Joi.number().required()
      .messages({
        'any.required': 'Поле movieId является обязательным.',
      }),
    nameRU: Joi.string().required()
      .messages({
        'any.required': 'Поле nameRU является обязательным.',
      }),
    nameEN: Joi.string().required()
      .messages({
        'any.required': 'Поле nameEN является обязательным.',
      }),
  }),
});

const movieIdValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex()
      .message('Передан не валидный id.'),
  }),
});

module.exports = {
  movieBodyValidator,
  movieIdValidator,
};
