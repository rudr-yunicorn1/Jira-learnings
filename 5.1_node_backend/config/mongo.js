const mongoose = require("mongoose");
require("dotenv").config();

const connectMongo = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Mongo Error:", err));
};

module.exports = connectMongo;
