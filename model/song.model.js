const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const songSchema = new Schema({
  title: { type: String },
  artist: { type: String },
  album: { type: String},
  genre: { type: String },
});

const Song = model("Songs", songSchema);

module.exports = Song;
