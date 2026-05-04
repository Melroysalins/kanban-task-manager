import { Box, Checkbox, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const TaskCard = ({ task, onToggle, onDelete }) => {
  const isDone = task.status === "done";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "8px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Checkbox checked={isDone} onChange={() => onToggle(task)} />

        <Typography
          sx={{
            textDecoration: isDone ? "line-through" : "none",
            color: isDone ? "gray" : "black",
          }}
        >
          {task.title}
        </Typography>
      </Box>

      {/* RIGHT SIDE (DELETE) */}
      <IconButton color="error" onClick={() => onDelete(task)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TaskCard;
