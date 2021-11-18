const express = require("express"); //express for routing
const router = express.Router(); //router is for routing and router is in express
const User = require("../models/User"); //need a model of user to create user
const { body, validationResult } = require("express-validator"); //express-validater to validate body info is in specific format like name length.
const bcrypt = require("bcryptjs"); //hashing alogirithm (password+salt)
var jwt = require('jsonwebtoken');//for authentication

const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$"

//create a User using: Post "/api/auth/createuser". Doesn't require login
router.post(
  "/createuser",
  [
    body("username", "Name Must be at least 7 ").isLength({ min: 6 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least ").isLength({ min: 8 }),
  ],

  //function has begin
  async (req, res) => {

    // if there are error, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log();
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      
      let user = await User.findOne({ email: req.body.email });//check whether the user with this email exists already
      // console.log(user);//this show null if user email not in database

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, User already exist with this email " });
      }

      const salt = await bcrypt.genSaltSync(10); //generating salt
      const securePass = await bcrypt.hash(req.body.password, salt); //use hash function

      //creating a new user
      userinfo = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: securePass,
      });
      

      //JWT for after login we dont need to login everytime except logout
      const data = {user: {id: userinfo.id}};
      const authtoken = await jwt.sign(data, JWT_SECRET_KEY);
      console.log(authtoken);
      res.json({"this authtoken is generated first time while registering ": authtoken})
      // res.json("submit succesfully");// res.json(userinfo);

    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

module.exports = router;
