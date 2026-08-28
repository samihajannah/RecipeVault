const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  ingredients: [String],
  spices: [String],
  cookingTime: String,
  equipment: [String],
  steps: [String],
});

module.exports = mongoose.model("Recipe", recipeSchema);