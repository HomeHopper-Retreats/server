const router = require("express").Router();
const User = require("../models/User.model");

router.get("/users/:id", (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((users) => {
      console.log("Retrieved User ID ->", users);
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error("Error while retrieving User ID ->", error);
      next(error);
    });
});

// router.post("/users", (req, res, next) => {
//   User.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     role: req.body.role,
//     password: req.body.password,
//   })
//     .then((reservation) => {
//       //   console.log("Created Reservation ->", place);
//       res.status(200).json(reservation);
//     })
//     .catch((error) => {
//       console.error("Error while retrieving reservations ->", error);
//       next(error);
//     });
// });

module.exports = router;
