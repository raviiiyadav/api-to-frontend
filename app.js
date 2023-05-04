const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./db/connect.js");
const products_routes = require("./routes/products.js");
const cors = require("cors");
const morgan = require("morgan");
const router = express.Router();

// configure dotenv
dotenv.config();

// database config
connectDB();
app.use(router);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// port
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hi");
});

// middleware
app.use("/api/products", products_routes);

//run listen
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`.bgCyan.white);
});
