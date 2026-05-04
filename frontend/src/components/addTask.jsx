import { Button, Stack, TextField } from "@mui/material";
import React from "react";

const AddTask = ({ taskTitle, setTaskTitle, handleCreateTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 prevent page reload
    handleCreateTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          border: "1px solid #e0e0e0",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          padding: "20px",
          borderRadius: "8px",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter your task..."
          size="small"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <Button
          type="submit"
          variant="outlined"
          size="small"
          sx={{
            whiteSpace: "nowrap",
            height: "40px",
            px: 2,
          }}
        >
          Add Task
        </Button>
      </Stack>
    </form>
  );
};

export default AddTask;
