const express = require('express');
const knex = require('../../../knex/knex');
const { credentialsValidation } = require('../../policies');
const router = express.Router();

router.post('/register', credentialsValidation, async (req, res) => {
  const { body } = req;
  try {
    const result = await knex('users').insert(body);
    return res.status(201).send(result);
  } catch (err) {
    return res.status(400).send(err);
  }

});

router.post('/login', async (req, res) => {
  const { body } = req;
  try {
    const [user] = await knex('users').where({ email: body.email }).select();
    if (!user) {
      return res.status(403).send('Incorrect credentials');
    }

    const isValidPassword = (body.password === user.password);

    if (!isValidPassword) {
      return res.status(403).send('Incorrect credentials');
    }

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send('Error occurred with login')
  }
});

module.exports = router;
