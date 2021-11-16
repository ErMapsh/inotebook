const express = require("express");
const router = express.Router();//need to export
const User = require("../models/User")

//create a User using: Post "/api/auth". Doesn't require auth
router.post("/", (req, res) => {
    // console.log(req.body)
    res.send(req.body)
    const user = User(req.body)
    user.save()
    console.log("successfully submit")
});

module.exports = router;