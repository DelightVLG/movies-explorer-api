const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле  E-mail является обязательным.'],
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Введен не верный формат email.',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле Пароль является обязательным.'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Поле Имя является обязательным.'],
    minlength: [2, 'Минимальная длина имени 2 символа.'],
    maxlength: [30, 'Максимальная длина имени 30 символов.'],
  },
});

userSchema.statics.findUserByCredentials = function find(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError('Неправильные почта или пароль.'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError('Неправильные почта или пароль.'));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
