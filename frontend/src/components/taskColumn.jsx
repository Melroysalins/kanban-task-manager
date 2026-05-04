import { Box, Typography } from "@mui/material";
import TaskCard from "./taskCard";

const TaskColumn = ({ title, tasks, handleDeleteTask, handleTaskStatus }) => {
  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        borderRadius: "8px",
        padding: "16px",
        minHeight: "300px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#999",
        },
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "12px" }}>
        {title}
      </Typography>

      {/* Tasks */}
      {tasks.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No tasks
        </Typography>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggle={handleTaskStatus}
          />
        ))
      )}
    </Box>
  );
};

export default TaskColumn;
