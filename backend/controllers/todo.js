const express = require("express");
const Todo = require("../models/schema");

const router = express.Router();

router.get("/getAllTasks", async (req, res) => {
  const todo = await Todo.query();
  res.json(todo).status(201);
});

module.exports = router;
