var express = require('express');

var router = express.Router();

const userModel = require("./users")
//didn't need to use app.set to here just create the routes.

/* GET home page. */
router.get('/', function(req, res) {
  req.session.banned=true;
  res.render("index"); //is ;laptop ke server par banned ki value true set
  
});

//the session property is set before rendering the index view in the first route handler. This ensures that the session property is properly set before any response is sent to the client.

router.get("/checkban" , function(req,res){

  if(req.session.banned===true){

  res.send("You are banned");

  }

  else{
    res.send("not banned")
  }
});


//deleting session

router.get("/removeban", function(req,res){

  req.session.destroy(function(err){

    if(err){
      throw err
    }

    res.send("ban removed")
  })
})


// //CREATION

router.get('/create', async function(req, res) {
  const createdUser = await userModel.create({
    //You need to pass the object that u defined as the schema
    username: "Mukta",
    age:18,
    name: "Mukta Jain"

  }) 
  //this is asynchronous.

  //if rn we;ll right, res.send("started")-> it will run first as this would run in the synchronous way

  //so we'll use async-await..so first the document would be created.

  res.send(createdUser)//Now this will run after creation only.

});






//READ
router.get("/allusers" ,async function(req,res){

  let allusers = await userModel.find(); //returns an array .
  
  res.send(allusers)
}) 

//Reading particular user


//READ
router.get("/OneUser" ,async function(req,res){

  let user = await userModel.findOne({username:"Mukta"}); //if the username doesn't present
  //You'll get null in that case in console or a blank page at server
  
  res.send(user)
}) 

//Delete

router.get("/delete" , async function(req, res){

  let deletedUser = await userModel.findOneAndDelete({
    name:"Mukta Jain"
  })

  res.send(deletedUser)//shows the deleted user
})


//Now, if after deletion, if you'll try to read you'll get empty array
module.exports = router;
