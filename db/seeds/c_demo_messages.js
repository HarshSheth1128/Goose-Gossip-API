
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { id: 1, content: 'this chat should be to anjali', sent_by: 'a', sent_to: 1 },
        { id: 2, content: 'this chat should be to cs', sent_by: 'a', sent_to: 2 }
      ]);
    });
};
