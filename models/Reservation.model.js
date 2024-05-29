const mongoose = require('mongoose');
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
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
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
