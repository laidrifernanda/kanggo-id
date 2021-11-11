const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: [String],
    required: true,
  },
  created_on: {
    type: Date,
    default: new Date(),
  },
});

module.exports = productdata = mongoose.model("productdata", productSchema);
