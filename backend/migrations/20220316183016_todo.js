/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("todo", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table
      .enum("status", ["DONE", "PENDING"])
      .defaultTo("PENDING")
      .notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("todo");
};
