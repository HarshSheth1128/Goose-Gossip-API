
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chat_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat_categories').insert([
        { category_name: 'None' },
        { category_name: 'Courses' },
        { category_name: 'Mood' },
      ]);
    });
};
