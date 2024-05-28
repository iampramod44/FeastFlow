//iampramodkumar8888
//iF0Yev4b1rbrLGaQ
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//mongodb config

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodi-cluster.mqm1312.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodi-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    //dabase and collection
    const menuCollection = client.db("demo-foodi-client").collection("menus");
    const cartCollection = client
      .db("demo-foodi-client")
      .collection("cartItems");

    //all menu items operations
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
