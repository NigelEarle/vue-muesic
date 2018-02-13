const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config/config.json');
const knex = require('../knex/knex');

const morgan = require('morgan');
const PORT = 8081;

const app = express();

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
  }, async (jwtPayload, done) => {
    try {
      const user = await knex('users').where('id', jwtPayload.id);
      if (!user) {
        return done(new Error(), null);
      }
      return done(null, user);
    } catch (err) {
      return done(new Error(), null);
    }
  })
);

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());


app.use('/auth', require('./routes/auth'));
app.use('/songs', require('./routes/songs'));
app.use('/bookmarks', require('./routes/bookmarks'));
app.use('/history', require('./routes/history'));

app.listen(PORT, () => {
  `Server listening on port: ${PORT}`;
});
