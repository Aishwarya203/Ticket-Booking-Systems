const {screenoneModel}= require("../model/screen1.js");
const {screentwoModel}= require("../model/screen2.js");
const {screenthreeModel}= require("../model/screen3.js");
const getHomepage = async(req, res, next)=> {
    let data;
    const docs1 = await screenoneModel.find({});
    const docs2 = await screentwoModel.find({});
    const docs3 = await screenthreeModel.find({});
    console.log(docs2);
    res.render("index.ejs", {
        val1: docs1,
        val2: docs2,
        val3: docs3,
    });
};
const bookseat = (req, res, next)=> {
    const number = parseInt(req.body.number);
    const data = screenoneModel1({
        bookseat: number,
    });
    data 
    .save()
    .then((results)=>{
        res.redirect("/book");
    })
    .catch((err)=>{
        console.log(err.code);
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