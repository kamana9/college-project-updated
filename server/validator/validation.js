const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    username: Joi.string().min(4).required(),
    phone: Joi.string().min(10).max(10).required().pattern(new RegExp("(980|981|982|984|985|986|974|975|972|963|961|962|988)[0-9]{7}")),
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

const pinValidation = data => {
  const schema = Joi.object({
    pin: Joi.string().min(5).max(5).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const transValidation = data => {
  const schema = Joi.object({
    pin: Joi.string().min(5).max(5).required(),
    receiver_phone: Joi.string().required().pattern(new RegExp("(980|981|982|984|985|986|974|975|972|963|961|962|988)[0-9]{7}")),
    amount: Joi.number().greater(0).required()
  });

  return schema.validate(data);
};


module.exports = {
  registerValidation,
  loginValidation,
  pinValidation,
  transValidation
};