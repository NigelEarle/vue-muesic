exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('artist').notNullable();
    table.string('genre').notNullable();
    table.string('album').notNullable();
    table.string('albumImageUrl').notNullable();
    table.string('youtubeId').notNullable();
    table.text('lyrics').notNullable();
    table.text('tab').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs');
};
