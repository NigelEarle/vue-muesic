const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { body } = req;
  try {
    const result = await knex.table('users').insert(body);
    return res.status(201).send(result);
  } catch (err) {
    return res.status(400).send(err);
  }

});

module.exports = router;
