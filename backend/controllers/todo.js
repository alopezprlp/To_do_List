const express = require("express");
const Todo = require("../models/schema");

const router = express.Router();

router.get("/getAllTasks", async (req, res) => {
  try {
    const todo = await Todo.query();
    res.json(todo).status(201);
  } catch (error) {
    console.log(error);
    res.json(error).status(500);
  }
});

router.post("/addTask", async (req, res) => {
  try {
    const task = await Todo.query().insert({ name: req.body.name });
    res.json(task).status(201);
  } catch (error) {
    res.json(error).status(500);
  }
});
router.delete("/deleteTask", async (req, res) => {
  try {
    await Todo.query().deleteById(req.body.id);
    res.json(parseInt(req.body.id)).status(201);
  } catch (error) {
    res.json(error).status(500);
  }
});

router.put("/updateTask", async (req, res) => {
  try {
    const task = await Todo.query().findById(req.body.id).patch({
      name: req.body.name,
    });
    res.json(task).status(201);
  } catch (error) {
    res.json(error).status(500);
  }
});
router.put("/changeStatus", async (req, res) => {
  try {
    const task = await Todo.query().findById(req.body.id).patch({
      status: req.body.status,
    });
    res.json(task).status(201);
  } catch (error) {
    res.json(error).status(500);
  }
});

module.exports = router;
