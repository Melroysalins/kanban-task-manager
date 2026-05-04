const { Router } = require("express");

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = Router();

router.route("/tasks").get(getTasks);

router.route("/tasks").post(createTask);

router.route("/tasks/:id").put(updateTask);

router.route("/tasks/:id").delete(deleteTask);

module.exports = router;
