const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: false,
  },
  amount: {
    type: Number,
    required: true,
    unique: false,
  },
  // gender: String,
  // status: String
  price: {
    type: Number,
    required: true,
  },
  transaction: String,
});
const Commanddb = mongoose.model("commanddb", schema);
module.exports = Commanddb;
