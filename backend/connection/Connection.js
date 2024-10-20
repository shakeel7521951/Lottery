const mongoose = require("mongoose");
require('dotenv').config(); 

const mongoDB = process.env.mongoDB_URL;

const connection = mongoose.connect(mongoDB)
.then(() => {
  console.log("Database connected successfully");
})
.catch((err) => {
  console.error("Database not connected", err);
});

module.exports = connection;
