const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.route('/:songId')
.get(async (req, res) => {
  const { songId } = req.params;
  try {

    const song = await knex('bookmarks').where('song_id', songId);
    return res.status(200).send(song);
  } catch(err) {
    return res.status(500).send(err);
  }

})

module.exports = router