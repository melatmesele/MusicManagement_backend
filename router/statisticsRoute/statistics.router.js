const express = require("express");
const statisticsRouter = express.Router();

const {
  overAllStatistics,
  numberOfSongsInGenre,
  songsAndAlbumsPerArtist,
  numberOfSongsInAlbum,
} = require("../../controller/statistics/countmanagement.controller");

statisticsRouter.get("/allStatistics", overAllStatistics);
statisticsRouter.get("/songsInGenre", numberOfSongsInGenre);
statisticsRouter.get("/songsAndAlbumsPerArtist", songsAndAlbumsPerArtist);
statisticsRouter.get("/songsInAlbum", numberOfSongsInAlbum);




module.exports = statisticsRouter;
