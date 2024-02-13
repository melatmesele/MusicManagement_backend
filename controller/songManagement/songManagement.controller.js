const Song = require("../../model/song.model");
const createSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body;

    if (!title || !artist || !album || !genre) {
      return res.sendStatus(400);
    }

    const song = await Song.create({
      title,
      artist,
      album,
      genre,
    });
    return res.status(200).json(song);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const updateSong = async (req, res) => {
  const { _id } = req.params;
  const { title, artist, album, genre } = req.body;

  try {
    const song = await Song.findByIdAndUpdate(
      _id,
      { title, artist, album, genre },
      { new: true }
    );

    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }

    return res.status(200).json({ message: "Song updated successfully", song });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteSong = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedSong = await Song.findByIdAndDelete(_id);
    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }
    return res.status(200).json(deletedSong);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const allSong = async (req, res) => {
  try {
    const allSong = await Song.find();

    return res.status(200).json(allSong);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

module.exports = { createSong, updateSong, deleteSong, allSong };
