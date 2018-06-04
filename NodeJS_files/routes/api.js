const express= require("express");
const router = express.Router();
const user = require('../models/userschema');
const Hotel = require('../models/hotelschema');
const Route = require('../models/routeschema');
const Flight = require('../models/flightschema');
const FlightBooked = require('../models/flightbookedschema');
const HotelBooked = require('../models/hotelbookedschema');
const Feedback = require('../models/feedbackschema');

router.post('/signup',function(req, res, next){
    console.log(req.body);
    user.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});

router.post('/login', function(req, res, next){
    let data = req.body;
    let id = data.email;
    let pass = data.pwd;
    user.findOne({'email':id, 'pwd':pass}).then(function(data){
        console.log(data);
        res.send(data);
    });
});


router.post('/flights',function(req,res,next){
    console.log(req.body);
    Route.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});


router.post('/insertflights',function(req,res,next){
    console.log(req.body);
    Flight.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});


router.post('/inserthotels',function(req,res,next){
    console.log(req.body);
    Hotel.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});


// router.get('/getflights',function(req,res){
//     console.log("get request for getflights:");
//     const param1 ="Kenya"; //req.query.param1;
//     const param2 ="Greece"; //req.query.param2;
//     console.log(param1);
//     console.log(param2);
//     flight.find({source:param1,destination:param2},function(err,data){
//      if(err)
//      {
//          console.log("Error in getting flights");
//      }
//       else{
//           res.json(data);
//           console.log(data);
//       }
//     })
// })

router.post('/showflights',function(req,res,next){
    console.log(req.body);
    let data = req.body;
    let src = data.source;
    let des = data.destination;
    
    Flight.find({'source':src, 'destination':des}).then(function(data){
        console.log(data);
        res.send(data);
    })
})

router.post('/showhotels',function(req,res,next){
    console.log(req.body);
    let data = req.body;
    let cnt= data.country;
    
    Hotel.find({'country':cnt}).then(function(data){
        console.log(data);
        res.send(data);
    })
})

router.post('/showprevtrips',function(req,res,next){
    console.log(req.body);
    let data = req.body;
    let em= data.email;
    
    Route.find({'email':em}).then(function(data){
        console.log(data);
        res.send(data);
    })
})


router.post('/bookingflight',function(req,res,next){
    console.log(req.body);
    FlightBooked.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});

router.post('/bookinghotel',function(req,res,next){
    console.log(req.body);
    HotelBooked.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});

router.post('/feedback',function(req,res,next){
    console.log(req.body);
    Feedback.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});

module.exports = router;