const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const { userId } = req.query;
    try {
      const history = await knex('history')
      .innerJoin('songs', 'songs.id', 'history.song_id')
      .where('user_id', userId);

      return res.status(200).send(history);
    } catch (err) {
      return res.status(500).send(err);
    }

  })
  .post(async (req, res) => {
    const { songId, userId } = req.body;

    try {
      const history = await knex('history')
      .inserting({
        song_id: songId,
        user_id: userId
      })
      .returning('*');
      return res.status(200).send(history);
    } catch (err) {
      return res.status(500).send(err);
    }
  })
module.exports = router;