const express = require('express');
const knex = require('../../../knex/knex');
const { isAuthenticated } = require('../../policies');
const router = express.Router();

router.route('/')
.get(isAuthenticated, async (req, res) => {
  const { id } = req.user;
  const { songId } = req.query;
  
  try {
    let bookmarks = knex('bookmarks')
    
    if (id && !songId) {
      bookmarks = await bookmarks
        .innerJoin('songs', 'bookmarks.song_id', 'songs.id')
        .where('bookmarks.user_id', id);
      return res.status(200).send(bookmarks);
    }

    bookmarks = await bookmarks.where('song_id', songId).andWhere('user_id', id);
    return res.status(200).send('bookmarks');

  } catch(err) {
    return res.status(500).send(err);
  }

})
.post(isAuthenticated, async (req, res) => {
  const { id } = req.user;
  const { bookmark: { songId } } = req.body;

  const saveBookmark = {
    song_id: songId,
    user_id: id,
  }

  try {
    const existingBookmark = await knex('bookmarks').where('song_id', songId).andWhere('user_id', id);
    
    if (existingBookmark.length > 0) {
      return res.status(400).send('Bookmark already exists');
    }

    const data = await knex('bookmarks').insert(saveBookmark).returning('*')
    return res.status(200).send(data);
  } catch(err) {
    return res.status(500).send(err);

  }
});

router.delete('/:bookmarkId', isAuthenticated, async (req, res) => {
  const { id } = req.user;
  const { bookmarkId } = req.params;

  try {
    await knex('bookmarks').where('id', bookmarkId).andWhere('user_id', id).del();
    return res.status(200).send('bookmark deleted');
  } catch (err) {
    return res.status(500).send(err);
  }
})

module.exports = router