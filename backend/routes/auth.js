const express = require("express");
const router = express.Router(); //need to export
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create a User using: Post "/api/auth". Doesn't require auth
router.post(
  "/",
  [
    body("name", "Name Must be at least ").isLength({ min: 6 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least ").isLength({ min: 8 }),
  ],

  (req, res) => {
    const errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
      // console.log(errors)
      return res.status(400).json({ errors: errors.array() });
    }
  

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user)).catch(err=>{ console.log(`Error ${err}`)
      res.json({Error :"please Enter unique value of Email", message: err.message})}).finally(console.log("submit successfully"))
    
    } 
);

module.exports = router;
