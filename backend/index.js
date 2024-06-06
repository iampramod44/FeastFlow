//iampramodkumar8888
//GwO7DCAeNwBXn9xO old backend
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//mongodb config
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodi-cluster.qvh4i5x.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodi-cluster`
  )
  .then(console.log("Connceted to mongodb"))
  .catch((error) => console.log("error connceting to mongodb"));

//   import routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.get("/", (req, res) => {
  res.send("Hwwello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
