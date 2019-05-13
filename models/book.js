const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const BookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  thumbnail: String,
  purchase: String
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("googlebooks",BookSchema);
