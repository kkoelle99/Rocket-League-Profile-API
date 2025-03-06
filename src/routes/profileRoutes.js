const express = require("express");
const { getProfile, getSessions } = require("../controllers/profileController");

const router = express.Router();

router.get("/profile/:username/:platform", getProfile);
router.get("/sessions/:username/:platform", getSessions);

module.exports = router;
