const express = require("express");
const cors = require("cors");
const parser = require("body-parser");

const app = express();

const router = require("./controllers/todo");

require("dotenv").config();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello world!");
});


app.listen(app.get("port"), () => {
  console.log(`Server is successfully running! at http://localhost:${app.get("port")}`);
});
