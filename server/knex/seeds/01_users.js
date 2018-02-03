
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'testing1@test.com',
          password: '12345678'
        },
        {
          email: 'testing2@test.com',
          password: '12345678'
        },
        {
          email: 'testing3@test.com',
          password: '12345678'
        },
        {
          email: 'testing4@test.com',
          password: '12345678'
        },
        {
          email: 'testing5@test.com',
          password: '12345678'
        },
        {
          email: 'testing6@test.com',
          password: '12345678'
        },
        {
          email: 'testing7@test.com',
          password: '12345678'
        },
        {
          email: 'testing8@test.com',
          password: '12345678'
        },
        {
          email: 'testing9@test.com',
          password: '12345678'
        },
        {
          email: 'testing0@test.com',
          password: '12345678'
        },
      ]);
    });
};
