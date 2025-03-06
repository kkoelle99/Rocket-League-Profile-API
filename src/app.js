const express = require("express");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", profileRoutes);

module.exports = app;
