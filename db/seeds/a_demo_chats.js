
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        { id: 1, chat_name: 'Anjali', type: 'direct', category_id: 1 },
        { id: 2, chat_name: 'CS_Losers', type: 'room', category_id: 3 },
        { id: 3, chat_name: 'Monkey', type: 'direct', category_id: 1 },
        { id: 4, chat_name: 'Cat', type: 'direct', category_id: 1 },
        { id: 5, chat_name: 'CS246', type: 'room', category_id: 2 },
        { id: 6, chat_name: 'MATH239', type: 'room', category_id: 2 },
        { id: 7, chat_name: 'CS350', type: 'room', category_id: 2 },
        { id: 8, chat_name: 'BU121', type: 'room', category_id: 2 },
        { id: 9, chat_name: 'Depressed_Gang', type: 'room', category_id: 3 }
      ]);
    });
};
