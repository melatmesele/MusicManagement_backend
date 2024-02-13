const Song = require("../../model/song.model");

const overAllStatistics =  async (req, res) => {
    try {
         const normalizeString = (str) => str.trim().toLowerCase();

        
         const distinctArtists = await Song.distinct("artist");
         const distinctAlbums = await Song.distinct("album");
         const distinctGenres = await Song.distinct("genre");

         const totalSongs = await Song.countDocuments();
         const totalArtists = new Set(distinctArtists.map(normalizeString)).size;
         const totalAlbums = new Set(distinctAlbums.map(normalizeString)).size;
         const totalGenres = new Set(distinctGenres.map(normalizeString)).size;

        res.status(200).json({
            totalSongs,
            totalArtists,
            totalAlbums,
            totalGenres,
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


const numberOfSongsInGenre  = async(req, res)=>{
  try {
    const songsInGenres = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);


    res.status(200).json(songsInGenres)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" });
  }

}
const numberOfSongsInAlbum = async (req, res) => {
  try {
    const songsInAlbum = await Song.aggregate([
      { $group: { _id: "$album", songsCount: { $sum: 1 } } },
    ]);

    res.status(200).json(songsInAlbum);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const songsAndAlbumsPerArtist = async (req, res) => {
  try {
    // Aggregate to count songs and albums for each artist
    const songsAndAlbumsPerArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          totalSongs: { $sum: 1 },
          totalAlbums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          _id: 1,
          totalSongs: 1,
          totalAlbums: { $size: "$totalAlbums" },
        },
      },
    ]);

    res.status(200).json({
      songsAndAlbumsPerArtist,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  overAllStatistics,
  numberOfSongsInGenre,
  songsAndAlbumsPerArtist,
  numberOfSongsInAlbum,
};