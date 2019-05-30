var express = require("express");
var router = express.Router();

// import the burger model to use the database functions
var burger = require("../models/burger.js");

// create the routes and add logic to execute
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
      var burgerObject = {
          burgers: data
      };
      console.log(burgerObject);
      res.render('index', burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        // return id of new burger
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(response) {
        console.log("callback working")
        // if nothing was changed this will return an error
        res.json(response)
        
    })

});

module.exports = router;