const express = require("express");
const router = express.Router();

const {
  createSong,
  updateSong,
  deleteSong,
  allSong,
} = require("../../controller/songManagement/songManagement.controller");

router.post("/createSong", createSong);
router.put("/updateSong/:_id", updateSong);
router.delete("/deleteSong/:_id", deleteSong);
router.get("/allSong", allSong);

module.exports = router;
