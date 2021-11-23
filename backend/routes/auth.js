const express = require("express"); //express for routing
const router = express.Router(); //router is for routing and router is in express
const User = require("../models/User"); //need a model of user to create user
const { body, validationResult } = require("express-validator"); //express-validater to validate body info is in specific format like name length.
const bcrypt = require("bcryptjs"); //hashing alogirithm (password+salt)
var jwt = require("jsonwebtoken"); //for authentication
const fetchuserid = require('../middleware/fetchuserid');
// const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$"

//Route1: create a User using: Post "/api/auth/createuser". Doesn't require login
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
      // console.log(error);
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email }); //check whether the user with this email exists already
      // console.log(user);//this show null if user email not in database

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, User already exist with this email " });
      }

      const salt = await bcrypt.genSalt(10); //generating salt
      const securePass = await bcrypt.hash(req.body.password, salt); //use hash function

      //creating a new user
      userinfo = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: securePass,
      });

      //JWT for after login we dont need to login everytime except logout
      const payload = { user: { id: userinfo.id } };
      const authtoken = jwt.sign(payload, JWT_SECRET_KEY);
      // console.log(authtoken);
      res.json({
        "this authtoken is generated first time while registering ": authtoken, "Registration": "Successfull"
      });
      // res.json("submit succesfully");// res.json(userinfo);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occur");
    }
  }
);





//Route2: Authenticate user after creating account, "POST": "/api/auth/login". Doesn't require login
router.post(
  "/loginuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blacnk ").exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req); // if there are error, return Bad request and the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body; //getting  information of user from document.body
    try {
      let userinfo = await User.findOne({ email }); //finding user already register with this email or not

      if (!userinfo) {
        return res.status(400).json({ error: "Please try to login with correct credentials" }); //if user not register then this response will see
      } else {

        // Comparing password (here run hash function of user typed plaintext as password  and generate hash)(this hash and dababase hash is compared if is equal then return true)
        const passwordCompare = await bcrypt.compare(password, userinfo.password);//return  true if both hash are same and vice-versa
        if (!passwordCompare) {
          return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        //sending data to sign 
        const payload = { user: { id: userinfo.id } };
        const authtoken = await jwt.sign(payload, JWT_SECRET_KEY);//save as cookie in user system and everytime dont need to login except logout;
        res.json({ "this authtoken is generated while login and save as in cookie ": authtoken, "username": userinfo.username, "Login": "Successfull" });
      }
      console.log("login succesfull");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occur");
    }
  }
);





// Route3: Get uesr-details from user site, using : POST '/api/auth/getuser. login required
router.post("/getuser", fetchuserid, async (req, res) => {

  try {
    userid=req.user.id
    console.log(`userid in auth: ${userid}`)
    const user = await User.findById(userid).select("-password");//here want all info of user except password 
    // console.log(user)
    res.send({ "user": user })

  } catch (error) {
    console.log(`${error}:Internal Server Error Occur`)
    res.status(500).send({ error: "Internal Server Error Occur" })
  }
});

module.exports = router;
