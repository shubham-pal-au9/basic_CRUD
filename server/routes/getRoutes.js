const express = require("express");
const { getData, getValue } = require("../controllers/getController");

const router = express.Router();

router.get("/getFirst", getData);
router.get("/getSecond", getValue);

module.exports = router;
