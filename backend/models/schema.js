const Knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Todo extends Model {
  static get tableName () {
    return "todo";
  }
}

module.exports = Todo;
