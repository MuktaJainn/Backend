const express = require("express");

let oneLinerJoke = require('one-liner-joke')
let figlet = require("figlet");

const app = express();

let getRandomJoke = oneLinerJoke.getRandomJoke();

//Middleware -> 
app.use(function(req,res,next){
    console.log("hello from middleware");
    next();//without this i would get fix at the first route i.e '/'
})




//This '/' is route, when you are at www.facebook.com then you are at '/' route
app.get('/' , function(req,res){
    res.send("Hello World")
})

app.get('/jokes' , function(req,res){
    res.send(getRandomJoke.body)
})

app.get('/art', function(req,res){

    figlet("Avengers Assemble" , function(err,data){
        if(err){
            res.send("Something went wrong...");
            console.dir(err);
            return;
        }
    
        else{
            res.send(data);
        }
    });
    
    
})
app.listen(3000);


//THis laptop has node.js-> node.js can make a server -> i have programmed using express..
//My laptop acting as a server, which is running at port 3000 ->localhost:3000

