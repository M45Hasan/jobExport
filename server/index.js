const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db.js");
const path = require("path");
const nodemon = require("nodemon");
dotenv.config();
const route = require("./routes/index.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/pdfs", express.static("pdfs"));
// http://localhost:5000/uploads/1693549919075-707024495.jpg
console.log(process.env.HOST_URL);
app.listen(5000, () => {
  console.log("Port runnung");
});
dbConnect();

app.use(route);
