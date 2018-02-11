const passport = require('passport');
const knex = require('../../knex/knex');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('../config/config.json');

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
  }, async (jwtPayload, done) => {
    try {
      const user = await knex('users').where('id', jwtPayload.id);
      console.log('USER', user);
      if (!user) {
        return done(new Error(), null);
      }
      return done(null, user);
    } catch (err) {
      return done(new Error(), null);
    }
  })
);

module.exports = passport;
