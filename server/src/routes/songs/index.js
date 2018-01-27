const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const songs = await knex('songs').select('*').limit(10);
      return res.status(200).send(songs);
    } catch(err) {
      return res.status(500).send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const [ song ] = await knex('songs').insert(req.body).returning('*');
      return res.status(201).send(song);
    } catch(err) {
      return res.status(500).send(err);
    }
  });

module.exports = router;