exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('history').del()
    .then(function () {
      // Inserts seed entries
      return knex('history').insert([
        {
          "user_id": 1,
          "song_id": 1,
        }
      ]);
    });
};
