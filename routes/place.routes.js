const router = require("express").Router();
const Place = require("../models/Place.model");

router.get("/places/:placeId", (req, res, next) => {
  const placeId = req.params.id;

  Place.find({ placeId })
    .then((places) => {
      console.log("Retrieved Place ID ->", placeId);
      res.status(200).json(places);
    })
    .catch((error) => {
      console.error("Error while retrieving Place ->", error);
      next(error);
    });
});

router.get("/places", (req, res, next) => {
  Place.find()
    .then((places) => {
      console.log("Retrieved Places ->", places);
      res.status(200).json(places);
    })
    .catch((error) => {
      console.error("Error while retrieving Places ->", error);
      next(error);
    });
});

router.post("/places", (req, res, next) => {
  Place.create({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    rating: req.body.rating,
    image: req.body.image,
  })
    .then((place) => {
      console.log("Created Place ->", place);
      res.status(200).json(place);
    })
    .catch((error) => {
      console.error("Error while retrieving Places ->", error);
      next(error);
    });
});

router.put("/places/:placeId", (req, res, next) => {
  const { placeId } = req.params;

  const newDetails = req.body;

  Place.findByIdAndUpdate(placeId, newDetails, { new: true })
    .then((place) => {
      console.log("Updated place ->", place);
      res.status(200).json(place);
    })
    .catch((error) => {
      console.error("Error while updating place ->", error);
      next(error);
    });
});

router.delete("/places/:placeId", (req, res, next) => {
  const { placeId } = req.params;

  Place.findByIdAndDelete(placeId)
    .then((result) => {
      console.log("Deleted place ->", result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Error while deleting place ->", error);
      next(error);
    });
});

module.exports = router;
