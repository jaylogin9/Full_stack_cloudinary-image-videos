const mongoose = require("mongoose");

// Defining a schema for the data
const videoSchema = new mongoose.Schema({
  title: { type: String,maxlength: 50, required: true },
  description: { type: String,maxlength: 200, required: true },
  thumbnail: { type: String, required: true },
  video: { type: String, required: true }
},{
  versionKey: false // set to false then it wont create in mongodb
});

module.exports= mongoose.model('Information',videoSchema);