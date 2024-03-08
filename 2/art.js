var figlet = require("figlet");

figlet("Avengers Assemble" , function(err,data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }

    else{
        console.log(data);
    }
});

//can we like make an open source contribution as it's using callbacks we can convert it to promise?
