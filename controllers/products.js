const Product = require("../models/product.js");

const getAllProducts = async (req, res) => {
  const mydata = await Product.find({
    income: { $lt: 5 },
    car: { $in: ["BMW", "Mercedes"] },
  });
  return res.status(200).json(mydata);
};

module.exports = getAllProducts;
