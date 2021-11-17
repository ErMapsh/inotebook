const express = require("express");
const router = express.Router(); //need to export
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create a User using: Post "/api/auth/createuser". Doesn't require login
router.post(
  "/createuser",
  [
    body("username", "Name Must be at least 7 ").isLength({ min: 6 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least ").isLength({ min: 8 }),
  ],

  async (req, res) => {
    // if there are error, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log();
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      // console.log(user);//this show null if user email not in database
      
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, User already exist with this email " });
      }

      //getting inforation from body
      await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.json("submit succesfully");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur")
    }
  }
);

module.exports = router;
