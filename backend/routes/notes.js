const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();//need to export
const fetchuserid = require('../middleware/fetchuserid');
const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$";
var jwt = require("jsonwebtoken"); //for authentication
const Note = require("../models/Note");//need a Note model for creating notes
const { Router } = require("express");

// Route1: Get uesr-notes from user db, using : GET '/api/notes/fetchallnotes. login required
router.get("/fetchallnotes", fetchuserid,
    async (req, res) => {
        try {
            const notes = await Note.find({ user: req.user.id });
            res.json({ success: true, "usernotes": notes, msg: "Yours notes" });
        } catch (e) {
            res.status(500).json({ success: false, error: "InterInternal Server Error Occur Or Unsuccessful" })
        }
    });

// Route2: Adding a new notes, using : Post '/api/notes/addnote. login required
router.post("/addnote", fetchuserid, [
    body("title", "title Must be at least 3 ").isLength({ min: 3 }),
    body("description", "description Must be at least 7").isLength({ min: 7 })],

    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ success: false, error: "Invalid Note Format" });
        }

        const { title, description, tag } = req.body;
        try {
            const note = new Note({ title, description, tag, user: req.user.id })
            const savenote = await note.save();
            res.status(200).json({ success: true, msg: "Successfully New Note Submitted", data: savenote });
            // res.status(200).json({savenote});

        } catch {
            res.status(500).json({ success: false, error: "Internal Server Error Occur Or Unsuccessful" });
        }
    });

// Route3: Update an existing note : Put '/api/notes/updatenote. login required
router.put("/updatenote/:id", fetchuserid,
    [body("title", "title Must be at least 3 ").isLength({ min: 3 }),
    body("description", "description Must be at least 7").isLength({ min: 7 })],

    async (req, res) => {

        //validation error
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ success: false, error: "Invalid Note Format" });
        }

        // here :id is noteid
        const { title, description, tag } = req.body;//destructering! we getting title , descri and tag from body
        const newNote = {}//for new note
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        try {
            const oldnotebyid = await Note.findById(req.params.id);//need to verify user by noteid and see is that user
            // console.log(oldnotebyid)
            if (!oldnotebyid) { return res.status(401).json({ success: false, error: "Not Allowed" }); }//if user note not available 
            if (oldnotebyid.user.toString() !== req.user.id) {//if note user and req apend user not equal
                return res.status(401).json({ success: false, error: "Not Allowed" });//we dont give permission to update
            }

            // if above all if statement return false then user is right person
            let note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
            res.json({ success: true, note, msg: "Successfully Note Submited" })
        }
        catch (error) {
            res.status(500).json({ success: false, error: "Internal Server Error Occur Or Unsuccessfull" });
        }
    }

)

//Router4 Delete existing node using DELETE "api/notes/deletenote" login required
router.delete("/deletenote/:id", fetchuserid, async (req, res) => {
    try {
        //find the note to be delete and delete it
        const delnotebyid = await Note.findById(req.params.id);//need to verify user by noteid and see is that user
        // console.log(delnotebyid)
        if (!delnotebyid) { return res.status(401).json({error:"Not Found"}); }//if user note not available 
        if (delnotebyid.user.toString() !== req.user.id) {
            return res.status(401).json({error:"Not Found"});
        }//if note user and req apend user not equal, we dont give permission to delete it

        //if above if statement false then we give permission to delete it
        delnote = await Note.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: "Note has been deleted", note: delnote })

    }
    catch {
        res.status(500).json({ scucess: false, error: "Internal Server Error Occur Or Unsuccessfull" });
    }

})


module.exports = router;