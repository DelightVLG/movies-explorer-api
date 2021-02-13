const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле  E-mail является обязательным.'],
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Введен не верный формат email',
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

module.exports = mongoose.model('user', userSchema);
