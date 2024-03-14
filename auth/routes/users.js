const mongoose = require("mongoose");
const pln = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Jain"); 

//make schema 


const userSchema = mongoose.Schema({
  username :String,
  password : String,
  secret: String
    
    
})
userSchema.plugin(pln);




// module.export = mongoose.model("nameOfCollection", Whichschema)
module.exports = mongoose.model("User", userSchema);
