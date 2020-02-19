
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { id: 1, content: 'this chat should be to anjali', sent_by: 'a', sent_to: 1 },
        { id: 2, content: 'this chat should be to cs', sent_by: 'a', sent_to: 2 },
        { id: 3, content: 'this chat should be to monkey', sent_by: 'a', sent_to: 3 },
        { id: 4, content: 'this chat should be to cat', sent_by: 'a', sent_to: 4 },
        { id: 5, content: 'this chat should be to cs246', sent_by: 'a', sent_to: 4  },
        { id: 6, content: 'this chat should be to math239', sent_by: 'a', sent_to: 4 },
        { id: 8, content: 'this chat should be to cs350', sent_by: 'a', sent_to: 4  },
        { id: 9, content: 'this chat should be to bu121', sent_by: 'a', sent_to: 4  },
        { id: 10, content: 'this chat should be to depressed gang', sent_by: 'a', sent_to: 4  }
      ]);
    });
};
