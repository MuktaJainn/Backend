const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MuktaJain"); 

//make schema 


const userSchema = mongoose.Schema({
    username: String,
    nickname :String,
    description: String,
    categories:{
      type:Array,
      default:[]
    },
    datecreated:{
      type: Date,
      default: Date.now()
    }
})
//create model 


// module.export = mongoose.model("nameOfCollection", Whichschema)
module.exports = mongoose.model("Users", userSchema);
