const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    image: {
      type: [String],
      required: [true, "URL is required."],
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
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
