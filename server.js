const express = require("express");
const eventRoutes = require("./routes/eventRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple request logger middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Event Management REST API (CA1)",
    endpoints: {
      "GET /api/events": "Retrieve all events",
      "GET /api/events/:id": "Retrieve an event by ID",
      "POST /api/events": "Add a new event",
      "PUT /api/events/:id": "Update complete event details",
      "PATCH /api/events/:id/status": "Update only the event status",
      "DELETE /api/events/:id": "Delete an event by ID",
    },
  });
});

// Routes
app.use("/api/events", eventRoutes);

// 404 handler
app.use(notFound);

// Centralized error handler (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`CA1 Event API running on http://localhost:${PORT}`);
});

module.exports = app;
