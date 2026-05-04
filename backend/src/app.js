const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/", taskRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log("Server is running");
});
