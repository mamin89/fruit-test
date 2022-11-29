const mongoose = require("mongoose");

//  Create the Pokemon Schema
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img:  { type: String, required: true }
},
{
    timestamps: true
});

//  Create the Pokemon model
const Pokemon = mongoose.model("Pokemon", pokemonSchema, 'pokemon');

//  Export the Pokemon model
module.exports = Pokemon;
