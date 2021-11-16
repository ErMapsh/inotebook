const express = require("express");
const router = express.Router();//need to export

router.get("/", (req, res) => {
    res.json([]);
});

module.exports = router;