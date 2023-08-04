const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const screenSchema = new Schema({
  bookSeat: {
    required: [true, "Must enter a number"],
    type: Number,
    min: 0,
    max: [60, "Only max 60"],
    unique: true,
  },
});

const screenTwoModel = mongoose.model("screenTwo", screenSchema);

module.exports = {
  screenTwoModel,
};