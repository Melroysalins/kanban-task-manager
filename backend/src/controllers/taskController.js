const { tasks } = require("../data/tasks");

const getTasks = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch tasks",
      err: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === "")
      return res.status(400).json({
        message: "Title is required",
      });

    const newTasks = {
      id: Date.now(),
      title,
      status: "todo",
    };

    tasks.push(newTasks);

    return res.status(201).json({
      message: "Task created successfully",
      data: newTasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create a new tasks",
      err: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    if (!status || !["todo", "done"].includes(status)) {
      return res
        .status(400)
        .json({ message: "Status must be 'todo' or 'done'" });
    }

    if (!tasks.length)
      return res.status(404).json({
        message: "No task found",
        data: [],
      });

    const task = tasks.find((t) => t.id === parseInt(id));

    if (!task)
      return res.status(404).json({
        message: "No task found",
        data: [],
      });

    task.status = status;

    return res.status(200).json({
      message: "Task has been successfully updated",
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update task",
      err: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!tasks.length)
      return res.status(400).json({
        message: "No task found",
      });

    const index = tasks.findIndex((task) => task?.id === parseInt(id));

    if (index === -1)
      return res.status(404).json({ message: `Task with id ${id} not found` });

    tasks.splice(index, 1);

    return res.status(200).json({
      message: "Task has been deleted successfully",
    });
  } catch (error) {
    return status(500).json({
      message: "Failed to delete task",
      err: error.message,
    });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
