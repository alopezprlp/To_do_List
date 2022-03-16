/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex("todo")
    .del()
    .then(() => {
      return knex("todo").insert([
        { name: "To clean the house", status: "PENDING" },
        { name: "Workout all day", status: "PENDING" },
      ]);
    });
};
