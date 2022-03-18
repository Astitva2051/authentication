const express = require("express");
const router = express.Router();
const users = require("../models/Users");

const { body, validationResult } = require("express-validator");

router.post(
  "/",
  body(
    "email",
    "ERROR: Invalid email. Please provide a valid email to continue"
  ).isEmail(),
  body(
    "password",
    "ERROR: Password should be minimum 8 character long"
  ).isLength({
    min: 8,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = errors.array();
      return res.status(400).send(error[0]["msg"]);
    }

    users
      .findOne({ email: req.body.email })
      .then(
        (user) => {
          if (user != null) {
            if (user.password === req.body.password) {
              console.log("Login success");
              console.log(user);
              res.send("Login Successful");
            } else {
              res.send("ERROR: Wrong Password");
            }
          } else {
            res.send("ERROR: Email is not registered");
          }
        },
        (err) => {
          next(err);
        }
      )
      .catch((err) => next(err));
  }
);

module.exports = router;
