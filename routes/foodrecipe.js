const db = require("../db");
const FoodRecipes = db.model("FoodRecipes", {
    fname:      String,
    lname:      String,
    email:      String,
    password:   String
});

module.exports = FoodRecipes;