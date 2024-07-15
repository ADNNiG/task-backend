const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  patchTask,
} = require("../controllers/taskController");
const router = express.Router();

// Create a Task
router.post("/", createTask);

// Get All Tasks
router.get("/", getTasks);

// Get a Task
router.get("/:id", getTask);

// Delete a Task
router.delete("/:id", deleteTask);

// Update a Task
router.put("/:id", updateTask);
module.exports = router;

// Patch a Task
router.patch("/:id", patchTask);
module.exports = router;
