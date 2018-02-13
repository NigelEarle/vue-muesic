const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    console.log(user)
    if (err) {
      return res.status(403).send({ error: 'Access denied'})
    } else {
      req.user = user;
      return next();
    }
  })(req, res, next)
}