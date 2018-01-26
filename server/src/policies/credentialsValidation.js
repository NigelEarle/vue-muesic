const Joi = require('joi');

const credentialsValidation = (req, res, next) => {
  const schema = {
    email: Joi.string().email(),
    password: Joi.string().regex(
      new RegExp('^[a-zA-Z0-9]{8,32}$')
    )
  }

  const { err, value } = Joi.validate(req.body, schema);
  
  if (err) {
    switch(err.details[0].context.key) {
      case 'email': {
        res.status(400).send('Must provide valid email');
        break;
      }

      case 'password': {
        res.status(400).send('Must provid valid password');
        break;
      }
    }
  } else {
    next();
  }
}

module.exports = credentialsValidation;
