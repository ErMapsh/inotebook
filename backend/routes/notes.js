const express = require("express");
const router = express.Router();//need to export
const fetchuserid = require('../middleware/fetchuserid');
const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$";
var jwt = require("jsonwebtoken"); //for authentication
const Note = require("../models/Note");//need a Note model for creating notes

// Route1: Get uesr-notes from user db, using : POST '/api/auth/fetchallnotes. login required
router.get("/fetchallnotes",fetchuserid, async (req, res) => {
    const notes = await Note.find({user: req.user});
    res.json({"usernotes":notes});
});

module.exports = router;