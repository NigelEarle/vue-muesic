const express = require('express');
const knex = require('../../../knex/knex');
const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const { search } = req.query;
    try {
      let songs = null
      if (search) {
        // search by query string on columns and like
        songs = await knex('songs')
        .select('*')
        .where(function(){
          this.where('title', 'like', `%${search}%`)
          .orWhere('artist', 'like', `%${search}%`)
          .orWhere('album', 'like', `%${search}%`)
          .orWhere('genre', 'like', `%${search}%`)
        })
        return res.status(200).send(songs);
      } else {
        songs = await knex('songs').select('*').limit(10);
        return res.status(200).send(songs);
      }
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

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const song = await knex('songs').where('id', id)
      return res.status(200).send(song);
    } catch (err) {
      return res.status(500).send(err);
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const result = await knex('songs').where('id', id).update(req.body).returning('*');
      return res.status(200).send(result);
    } catch (err) {
      return res.status(500).send(err);
    }
  })

module.exports = router;