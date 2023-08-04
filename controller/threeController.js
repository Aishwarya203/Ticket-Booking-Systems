const { screenThreeModel } = require("../model/screen3.js");
const bookSeat = (req, res, next) => {
  const number = parseInt(req.body.numberthree);
  const data = screenThreeModel({
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
  const number = parseInt(req.body.numberthree);
  const docs = await screenThreeModel.deleteOne({ bookSeat: number });
  console.log(docs);
  res.redirect("/book");
};

module.exports = {
  bookSeat,
  cancelSeat,
};