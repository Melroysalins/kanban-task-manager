import { useEffect } from "react";
import { useState } from "react";

export const useAddTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [taskTitle, setTaskTitle] = useState("");

  const fecthAllTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/tasks");

      const result = await response.json();

      setTasks(result?.data);
    } catch (error) {
      console.error("Error : Failed to fetch tasks", error);
    }
  };

  useEffect(() => {
    fecthAllTasks();
  }, []);

  const handleCreateTask = async () => {
    try {
      if (!taskTitle.length || taskTitle?.trim() === "")
        return alert("Please enter the task title");

      const data = {
        title: taskTitle,
        status: "todo",
      };

      const response = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) setTasks((prev) => [...prev, result.data]);

      setTaskTitle("");
    } catch (error) {
      console.error("Error : Failed to create task", error);
    }
  };

  const handleDeleteTask = async (task) => {
    try {
      const response = await fetch(`http://localhost:4000/tasks/${task?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) fecthAllTasks();
    } catch (error) {
      console.error("Error : Failed to delete  task", error);
    }
  };

  const handleTaskStatus = async (task) => {
    try {
      const updatedStatus = task.status === "todo" ? "done" : "todo";
      const response = await fetch(`http://localhost:4000/tasks/${task?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updatedStatus }),
      });

      const result = await response.json();

      if (response.ok) fecthAllTasks();
    } catch (error) {
      console.error("Error : Failed to update task status", error);
    }
  };

  return {
    tasks,
    setTasks,
    taskTitle,
    setTaskTitle,
    handleCreateTask,
    handleDeleteTask,
    handleTaskStatus,
  };
};
