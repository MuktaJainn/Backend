const express= require("express");

const app = express();
app.set("view engine" , "ejs");
app.use(express.static('./public')) //middlewareee , there is some knowledge in index.ejs
app.get('/', function(req,res){

    res.render("index" , {age:12}); // we change the word age to 12.
})

app.get('/error', function(req,res){

    throw Error("Something went wrong");


});

app.get('/profile', function(req,res){

    res.send("Hello from Profile");
})

app.get('/profile/:username', function(req,res){
    

    res.send(`Hello from ${req.params.username}`);
    // username is going from the browser, the data that is the user is sending.
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })


app.listen(3000)


