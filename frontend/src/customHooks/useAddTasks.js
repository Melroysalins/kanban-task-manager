import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "https://kanban-task-manager-ntwz.onrender.com";

export const useAddTasks = () => {
  const [tasks, setTasks] = useState([]);

  const [taskTitle, setTaskTitle] = useState("");

  const fecthAllTasks = async () => {
    try {
      const response = await fetch(`${BASE_URL}/tasks`);

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

      const response = await fetch(`${BASE_URL}/tasks`, {
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
      const response = await fetch(`${BASE_URL}/tasks/${task?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) setTasks((prev) => prev.filter((t) => t.id !== task.id));
    } catch (error) {
      console.error("Error : Failed to delete  task", error);
    }
  };

  const handleTaskStatus = async (task) => {
    try {
      const updatedStatus = task.status === "todo" ? "done" : "todo";
      const response = await fetch(`${BASE_URL}/tasks/${task?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updatedStatus }),
      });

      const result = await response.json();

      if (response.ok)
        setTasks((prev) =>
          prev.map((t) =>
            t.id === task.id
              ? { ...t, status: t.status === "todo" ? "done" : "todo" }
              : t,
          ),
        );
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
