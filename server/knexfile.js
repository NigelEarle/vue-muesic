// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'vue_muesic',
      charset: 'utf8'

    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

};
