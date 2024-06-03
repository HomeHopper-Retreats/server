const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    date: {
      type: [Date],
      required: [true, "Dates are required."],
    },
    guests: {
      type: Number,
      default: 1,
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
