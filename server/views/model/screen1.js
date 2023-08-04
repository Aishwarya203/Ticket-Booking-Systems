const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const screenSchema = new Schema({
  bookSeat: {
    required: [true, "Must enter a number"],
    type: Number,
    min: 0,
    max: [45, "Only max 45"],
    unique: true,
  },
});

const screenOneModel = mongoose.model("screenOne", screenSchema);

module.exports = {
  screenOneModel,
};