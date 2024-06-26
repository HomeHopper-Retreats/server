const router = require("express").Router();
const Reservation = require("../models/Reservation.model");

router.get("/reservations/:reservationId", (req, res, next) => {
  const {reservationId} = req.params;

  Reservation.findById(reservationId)
    .then((reservation) => {
      //   console.log("Retrieved Reservation ID ->", reservationId);
     
      res.status(200).json(reservation);
    })
    .catch((error) => {
      console.error("Error while retrieving Reservation ->", error);
      next(error);
    });
});

router.get("/reservations", (req, res, next) => {
  Reservation.find()
    .then((reservations) => {
      //   console.log("Retrieved reservations ->", reservations);
      res.status(200).json(reservations);
    })
    .catch((error) => {
      console.error("Error while retrieving reservations ->", error);
      next(error);
    });
});

router.get("/reservations/user/:userId", (req, res, next) => {
  const userId = req.params.userId;

  // Use the userId to retrieve reservations associated with that user
  Reservation.find({ user: userId })
    .then((reservations) => {
      res.status(200).json(reservations);
    })
    .catch((error) => {
      console.error("Error while retrieving user's reservations ->", error);
      next(error);
    });
});

router.post("/reservations", (req, res, next) => {
  Reservation.create({
    name: req.body.name,
    date: req.body.date,
    guests: req.body.guests,
    place: req.body.place,
    user: req.body.user
  })
    .then((reservation) => {
      //   console.log("Created Reservation ->", place);
      res.status(200).json(reservation);
    })
    .catch((error) => {
      console.error("Error while retrieving reservations ->", error);
      next(error);
    });
});

router.put("/reservations/:reservationId", (req, res, next) => {
  const { reservationId } = req.params;

  const newDetails = req.body;

  Reservation.findByIdAndUpdate(reservationId, newDetails, { new: true })
    .then((reservation) => {
      //console.log("Updated place ->", reservation);
      res.status(200).json(reservation);
    })
    .catch((error) => {
      console.error("Error while updating place ->", error);
      next(error);
    });
});

router.delete("/reservations/:reservationId", (req, res, next) => {
  const { reservationId } = req.params;

  Reservation.findByIdAndDelete(reservationId)
    .then((result) => {
      // console.log("Deleted reservation ->", result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Error while deleting reservation ->", error);
      next(error);
    });
});

module.exports = router;
