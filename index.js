const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view-engine", "ejs");
app.use(express.static("public"));

app.use("/", router);

// If URL not matched.
app.use((req, res, next) => {
  res.send("<h1>Sorry we have an Error 404!</h1>");
});

mongoose
  .connect(process.env.URI)
  .then((valueDB) => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("Address is http://localhost:" + process.env.PORT);
    });
  })
  .catch((reson) => {
    console.log(reson);
  });
/*
mongoose.connect(process.env.URI, (error) => {
  if (error) {
    console.log("Connection to DB failed");
    console.log(error);
  } else {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("Address is http://localhost:" + process.env.PORT);
    });
  }
});
*/