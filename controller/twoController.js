const { screenTwoModel } = require("../model/screen2.js");
const bookSeat = (req, res, next) => {
  const number = parseInt(req.body.numbertwo);
  const data = screenTwoModel({
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
  const number = parseInt(req.body.numbertwo);
  const docs = await screenTwoModel.deleteOne({ bookSeat: number });
  console.log(docs);
  res.redirect("/book");
};

module.exports = {
  bookSeat,
  cancelSeat,
};