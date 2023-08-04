const { screenOneModel } = require("../model/screen1.js");
const { screenTwoModel } = require("../model/screen2.js");
const { screenThreeModel } = require("../model/screen3.js");

const getHomepage = async (req, res, next) => {
  let data;
  const docs1 = await screenOneModel.find({});
  const docs2 = await screenTwoModel.find({});
  const docs3 = await screenThreeModel.find({});
  //console.log(docs1);
  console.log(docs2);
  res.render("index.ejs", {
    val1: docs1,
    val2: docs2,
    val3: docs3,
  });
};

const bookSeat = (req, res, next) => {
  const number = parseInt(req.body.number);
  const data = screenOneModel({
    bookSeat: number,
  });

  data
    .save()
    .then((result) => {
      res.redirect("/book");
    })
    .catch((err) => {
      console.log(err.code);
      if (err.code === 11000) {
        res.render("err.ejs", {
          mssg: "seat already Booked",
        });
      } else {
        res.render("err.ejs", {
          mssg: err.message,
        });
      }
    });
};

const cancelSeat = async (req, res, next) => {
  const number = parseInt(req.body.number);
  const docs = await screenOneModel.deleteOne({ bookSeat: number });
  console.log(docs);
  res.redirect("/book");
};

module.exports = {
  getHomepage,
  bookSeat,
  cancelSeat,
};