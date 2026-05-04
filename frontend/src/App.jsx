import { useState } from "react";
import { Box, Stack } from "@mui/material";
import "./App.css";
import AddTask from "./components/addTask";
import { useAddTasks } from "./customHooks/useAddTasks";
import TaskColumn from "./components/taskColumn";

function App() {
  const {
    tasks,
    setTasks,
    taskTitle,
    setTaskTitle,
    handleCreateTask,
    handleDeleteTask,
    handleTaskStatus,
  } = useAddTasks();

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          marginTop: "30px",
          width: "800px",

          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <AddTask
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          handleCreateTask={handleCreateTask}
        />

        <Stack
          direction={"row"}
          sx={{
            alignItems: "stretch",
            justifyContent: "space-between",
            width: "100%",
            gap: "10px",
            marginTop: "20px",
            height: "400px",
          }}
        >
          <TaskColumn
            title="To Do"
            tasks={todoTasks}
            handleDeleteTask={handleDeleteTask}
            handleTaskStatus={handleTaskStatus}
          />
          <TaskColumn
            title="Done"
            tasks={doneTasks}
            handleDeleteTask={handleDeleteTask}
            handleTaskStatus={handleTaskStatus}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
