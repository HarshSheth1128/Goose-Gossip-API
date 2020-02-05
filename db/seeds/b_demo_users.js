
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { uuid: "a", email: "harsh@harsh.com", username: "harsh", password: "cGFzc3dvcmQ=" },
        { uuid: "b", email: "test@test.com", username: "test", password: "cGFzc3dvcmQ=" }
      ]);
    });
};
