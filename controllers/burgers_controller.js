var db = require("../models/");

module.exports = function(app){
    app.get("/", function(req,res){
        db.Burger.findAll({}).then(function(result){
            res.json(result);
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name    
        }).then(function(result){
            res.json({ id: result.insertId });
        });
    });

    app.put("/api/burgers/:id", function(req, res){
        db.Burger.update({
            devoured: req.body.devoured
        },{
            where:{
                id: req.params.id
            }
        }).then(function(result){
            if(result.changedRows == 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
};