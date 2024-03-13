const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbname"); 

//make schema 


const userschema = mongoose.Schema({
    username: String,
    name:String,
    age:Number
})
//create model 


// module.export = mongoose.model("nameOfCollection", Whichschema)
module.exports = mongoose.model("Users", userschema);