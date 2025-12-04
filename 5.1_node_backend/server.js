const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database connections
const connectMongo = require("./config/mongo");
const mysql = require("./config/mysql");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DBs
connectMongo();
mysql.connect();

// Sample API
app.get("/", (req, res) => {
  res.send("Backend Connected Successfully");
});

app.listen(5000, () => console.log("Server running on port 5000"));
