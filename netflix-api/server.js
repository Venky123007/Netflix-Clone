const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Define an async function to handle MongoDB connection
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/netflix", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the async function to connect to MongoDB
connectToDatabase();

app.use("/api/user", userRoutes);

// Start the server after connecting to MongoDB
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
