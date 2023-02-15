const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: String,
  sender: String,
  reciever: String
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;