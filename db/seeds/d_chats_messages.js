
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('chats_messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats_messages').insert([
        { id: 1, chat_id: 1, messages_id: 1 }
      ]);
    });
};
