var express = require("express");
var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function(req,res){
    burger.selectAll(function(result){
        var dataObj = {burgers: result};
        res.render("index", dataObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      if(result.changedRows == 0){
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;