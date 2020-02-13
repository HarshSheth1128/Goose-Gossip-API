
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users_chats').del()
    .then(() => {
      // Inserts seed entries
      return knex('users_chats').insert([
        { chat_id: 1, user_id: 'a' },
        { chat_id: 3, user_id: 'a' },
        { chat_id: 4, user_id: 'a' }
      ]);
    });
};
