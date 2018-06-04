var express= require("express");
const app = express(); 
const routes = require('./routes/api');
var bodyParser = require('body-parser');
// var config=require('./config.json');
 const mongoose = require('mongoose');
// app.use(bodyParser.json());

// mongoose.connect(config.connectionString);

// app.use('',express.static('static'));     //apna project get krane ke liye jaise kuch na ho path me to ye static function chle
// app.use('/home',express.static('static')); // use is a middleware function jo get post se pehle function krega or koi bhi javascript func chalane hon to isme daal skte hain.





//set up express app


//connect to mongodb
mongoose.connect('mongodb://localhost/Trip_planner');
mongoose.Promise = global.Promise;



app.use(bodyParser.json());

//initialize routes (middleware func)
app.use('/api',require('./routes/api'));

//middleware for error handling
app.use(function(err,req,res,next){
 //console.log(err);
 res.status(422).send({error:err.message});
});

//listen for requests
app.listen(4000,function()
    {
       console.log("listening to request");
    });