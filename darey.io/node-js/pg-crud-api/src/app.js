require("dotenv").config();
const express = require("express");
const usersRouter = require("./routes/users");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Users routes
app.use("/users", usersRouter);

// 404 handler for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
