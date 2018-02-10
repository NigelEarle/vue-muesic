const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.route('/')
.get(async (req, res) => {
  const { songId, userId } = req.query;

  try {
    console.log(songId, parseInt(userId));
    let bookmarks = null;

    if (userId && !songId) {
      bookmarks = await knex('bookmarks').where('user_id', userId)
      return res.status(200).send(bookmarks);
    }

    if (!userId && songId) {
      bookmarks = await knex('bookmarks').where('song_id', songId)
      return res.status(200).send(bookmarks);
      
    }

    bookmarks = await knex('bookmarks').where('song_id', songId).andWhere('user_id', userId);
    return res.status(200).send(bookmarks);

  } catch(err) {
    return res.status(500).send(err);
  }

})
.post(async (req, res) => {
  const { bookmark: { songId, userId } } = req.body;

  const saveBookmark = {
    song_id: songId,
    user_id: userId,
  }

  try {
    const existingBookmark = await knex('bookmarks').where('song_id', songId).andWhere('user_id', userId);
    
    if (existingBookmark.length > 0) {
      return res.status(400).send('Bookmark already exists');
    }

    const data = await knex('bookmarks').insert(saveBookmark).returning('*')
    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(err);

  }
});

router.delete('/:bookmarkId', async (req, res) => {
  const { bookmarkId } = req.params;

  try {
    const data = await knex('bookmarks').where('id', bookmarkId).del();
    return res.status(200).send('bookmark deleted');
  } catch (err) {
    return res.status(500).send(err);
  }
})

module.exports = router