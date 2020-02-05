
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        { id: 1, chat_name: 'Anjali', type: 'direct' },
        { id: 2, chat_name: 'CS_Losers', type: 'room' },
      ]);
    });
};
