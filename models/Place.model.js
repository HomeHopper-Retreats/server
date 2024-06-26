const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    image: {
      type: [String],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    petsAllowed: {
      type: Boolean,
      default: false,
    },
    handicapAccessible: {
      type: Boolean,
      default: false,
    },
    kitchenAvailable: {
      type: Boolean,
      default: false,
    },
    elevatorAvailable: {
      type: Boolean,
      default: false,
    },
    poolAvailable: {
      type: Boolean,
      default: false,
    },
    isLuxurious: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
