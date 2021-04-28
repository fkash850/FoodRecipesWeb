// Copied from zyBooks Figure 11.8.7
const mongoose = require("mongoose");

mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb+srv://dbUser:ist256@foodrecipescluster.xonsv.mongodb.net/mydb?retryWrites=true&w=majority", 
    { useNewUrlParser: true });

module.exports = mongoose;