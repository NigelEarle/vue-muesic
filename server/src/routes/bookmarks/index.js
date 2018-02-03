const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.route('/')
.get(async (req, res) => {
  const { songId, userId } = req.query;

  try {
    let bookmark = null;

    // absolute trash - will refactor - tired from work
    if (!songId && userId) {
      bookmark = await knex('bookmarks').where('user_id', userId);
      if (bookmark.length === 0) {
        return res.status(200).send(null);
      }
      return res.status(200).send(bookmark);
    }

    if (songId && !userId) {
      bookmark = await knex('bookmarks').where('song_id', songId).select('*');
      if (bookmark.length === 0) {
        return res.status(200).send(null);
      }
      return res.status(200).send(bookmark);
    }
    bookmark = await knex('bookmarks').where('song_id', songId).andWhere('user_id', userId);
    if (bookmark.length === 0) {
      return res.status(200).send(null);
    }
    return res.status(200).send(bookmark);
  } catch(err) {
    return res.status(500).send(err);
  }

})

module.exports = router