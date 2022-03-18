const express = require("express");
const router = express.Router();
const users = require("../models/Users");

const { body, validationResult } = require("express-validator");
const isValidBirthdate = require("is-valid-birthdate");

router.post(
  "/",
  body(
    "email",
    "ERROR: Invalid email, Please Provide a valid email to proceed"
  ).isEmail(),
  body("password", "ERROR: Password should be minimum 8 character long").isLength({
    min: 8,
  }),
  body("name", "ERROR: Name should contain atleast 2 characters").isLength({ min: 2 }),
  body("mobile", "ERROR: Inavlid mobile no. Please provide correct mobile no").isMobilePhone(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = errors.array();
      return res.status(400).send(error[0]["msg"]);
    }

    if (isValidBirthdate(req.body.birthdate) == false) {
      return res
        .status(400)
        .send("ERROR: Please provide a valid birthdate in the format: YYYY/MM/DD");
    }

    users
      .findOne({ email: req.body.email })
      .then(
        (user) => {
          if (user != null) {
            res.send("User with this email id already exist");
          } else {
            users
              .create({
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                birthdate: req.body.birthdate,
                name: req.body.name,
                admin: true,
              })
              .then(
                (user) => {
                  res.send("User registered successfuly");
                  console.log(user);
                },
                (err) => next(err)
              )
              .catch((err) => {
                next(err);
              });
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
