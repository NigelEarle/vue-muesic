
exports.up = function(knex, Promise) {
  return knex.schema.createTable('history', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.integer('song_id').references('id').inTable('songs')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookmarks');
};
