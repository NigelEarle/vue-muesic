const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../../../knex/knex');
const config = require('../../config/config');
const { hashPassword, comparePassword } = require('../../helpers/hash');

const { credentialsValidation } = require('../../policies');
const router = express.Router();

const ONE_WEEK = 60 * 60 * 24 * 7;
const jwtSignUser = (user) => {
  const userObject = JSON.parse(JSON.stringify(user))

  return jwt.sign(userObject, config.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

router.post('/register', credentialsValidation, async (req, res) => {
  const { body } = req;
  try {
    const hash = await hashPassword(body.password);
    body.password = hash;
    const result = await knex('users').insert(body);
    return res.status(201).send(result);
  } catch (err) {
    return res.status(400).send(err);
  }

});

router.post('/login', async (req, res) => {
  const { body } = req;
  try {
    const [ user ] = await knex('users').where({ email: body.email }).select();

    if (!user) {
      return res.status(403).send('Incorrect credentials');
    }

    const isValidPassword = await comparePassword(body.password, user.password)

    if (!isValidPassword) {
      return res.status(403).send('Incorrect credentials');
    }

    return res.status(200).send({
      user,
      token: jwtSignUser(user)
    });
  } catch (err) {
    console.log(err)
    return res.status(500).send('Error occurred with login')
  }
});

module.exports = router;
