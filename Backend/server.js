require("dotenv").config({ path: "./.env" }); // Explicitly specify the .env file path
const express = require("express");
const cors = require("cors");
const chatRoutes = require("./src/routes/chatRoutes");
const errorHandler = require("./src/middleware/errorHandler");
const connectDB = require("./src/config/db");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
// connectDB();

app.use("/api", chatRoutes);

// Error handler should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
