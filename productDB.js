const connectDB = require("./db/connect.js");
const Product = require("./models/product.js");
const ProductJson = require("./products.json");
const dotenv = require("dotenv");

dotenv.config();

const start = async () => {
  try {
    await connectDB();
    await Product.create(ProductJson);
  } catch (error) {
    console.log(error);
  }
};

start();
