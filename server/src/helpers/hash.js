const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const SALT = 8;

const hashPassword = password => {
  return bcrypt.genSaltAsync(SALT)
  .then(salt => bcrypt.hashAsync(password, salt))
}

const comparePassword = (password, hash) => {
  return bcrypt.compareAsync(password, hash);
}


module.exports = {
  hashPassword,
  comparePassword
}