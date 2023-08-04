const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const screenSchema = new Schema({
  bookSeat: {
    required: [true, "Must enter a number"],
    type: Number,
    min: 0,
    max: [75, "Only max 75"],
    unique: true,
  },
});

const screenThreeModel = mongoose.model("screenThree", screenSchema);

module.exports = {
  screenThreeModel,
};