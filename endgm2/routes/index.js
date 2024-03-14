var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
//Flash message created

router.get('/failed', function(req,res){
  req.flash("age" , 12)
  res.send("hello")
})

//Flash message data accessed here

router.get('/checkaro' , function(req,res){
  console.log(req.flash("age"))

  res.send("check")
})


//Solving questions.

router.get('/create' , async function(req, res){

  let userdata = await userModel.create({

    username: "Yuktika",
    nickname : "HaanMajaMaaa",
    description: "Yess the journey matters",
    categories:['Travel', 'fashion'],
    
  })

  res.send(userdata);
  

})

router.get('/getusers' , async function(req,res){

  let allUser = await userModel.find();
  res.send(allUser)
})


router.get('/find' , async function(req,res){

  //Case insensitive search

  var regex = new RegExp("^yuKtI$", 'i')
  //AS we are using find() ..we are getting an array containg object
  let user = await userModel.find({username: regex}) //rn it's working, but what if i had searched with yukti
  //Then it would have returned empty array.

  res.send(user);
})

router.get('/catbased' , async function(req,res){

  //users having a particular same value in a array

  let userss = await userModel.find({categories:{$all : ["js"]}}) //can give more than one value too

  res.send(userss)
})



router.get('/dateRange' , async function(req, res){
  var date1 = new Date('2024-03-14')
  var date2 = new Date('2024-03-15')
  //find the users created between these dates

   let dates = await userModel.find({datecreated: {$gte:date1 , $lte: date2}})
   //gte - greater lte - lesser
  
   res.send(dates);
})


//filter based on existence of field 

router.get('/fieldSearch' , async function(req, res){

  let field = await userModel.find({categories :{$exists:true}});

  res.send(field)
})



//length of specific field 

router.get('/length' , async function(req, res){
  let exp = await userModel.find({

    //the user having nicknames having k=length from 0 to 12 will be returned
    $expr:{
      $and:[
        {$gte:[{$strLenCP: '$nickname'},0]},{$lte:[{$strLenCP: '$nickname'},12]}
      ]
    }
  })

  res.send(exp);




})

module.exports = router;
