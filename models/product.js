const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
  income: {
    type: String,
  },
  city: {
    type: String,
  },
  car: {
    type: String,
  },
  quote: {
    type: String,
  },
  phone_price: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", product_schema);
