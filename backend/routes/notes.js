const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();//need to export
const fetchuserid = require('../middleware/fetchuserid');
const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$";
var jwt = require("jsonwebtoken"); //for authentication
const Note = require("../models/Note");//need a Note model for creating notes

// Route1: Get uesr-notes from user db, using : GET '/api/notes/fetchallnotes. login required
router.get("/fetchallnotes", fetchuserid, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json({ "usernotes": notes });
});


// Route2: Adding a new notes, using : Post '/api/notes/addnote. login required
router.post("/addnote", fetchuserid, [
    body("title", "title Must be at least 3 ").isLength({ min: 3 }),
    body("description", "description Must be at least 9").isLength({ min: 9 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, tag } = req.body;
        try {
            const note = new Note({ title, description, tag, user: req.user.id })
            const savenote = await note.save();
            res.status(200).json({ note: "successfully submitted", data: savenote});
            // res.status(200).json({savenote});

        } catch {
            res.status(500).send("Internal Server Error Occur Or Unsuccessfull");
        }
    });



module.exports = router;