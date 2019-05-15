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
      res.render('index');
  });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // return id of new burger
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/cats/:id", function(req, res) {
    var status = "id = " + req.params.id;

    console.log("status", status);

    burger.update({
        devoured: req.body.devoured
    }, status, function(result) {
        // if nothing was changed this will return an error
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;