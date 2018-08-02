var express = require('express');

var burger = require('../model/burger');


var router = express.Router();


// connects the routes to the server



router.get("/", function (req, res){
    console.log(burger);

    burger.all(function(data){
        console.log("here");
        console.log(data);
        let hbsObject = {
            burgers : data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res){
    burger.create(['burger_name','devoured'],[req.body.burgerName, req.body.devoured], function(result){


        res.json({id : result.insertId})
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = req.params.id;  

  console.log("condition " + condition);
  
  burger.update(
    condition , function(result){
        
        console.log(result);
 
          res.status(200).end();
    
  });
});




module.exports = router;