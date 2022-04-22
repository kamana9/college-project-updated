const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    username: Joi.string().min(4).required(),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    dob: Joi.date().required(),
    gender: Joi.string().max(7).required()
  });

  return schema.validate(data);
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(7).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const walletValidation = data => {
  const schema = Joi.object({
    pin: Joi.string().max(5).required()
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  walletValidation
};