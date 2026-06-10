const express = require("express");

const router = express.Router();

const {
  analyzeJD,
} = require("../controllers/jdController");

router.post("/analyze", analyzeJD);

module.exports = router;