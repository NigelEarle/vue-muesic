
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookmarks').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookmarks').insert([
        {
          "user_id": 1,
          "song_id": 1,
        }
      ]);
    });
};
