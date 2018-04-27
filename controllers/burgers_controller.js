var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // console.log(db.Burger);
        db.Burger.findAll({}).then(function (result) {
            var dataObj = { burgers: result };
            res.render("index", dataObj);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (result) {
            res.json({ id: result.insertId });
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Customer.create({
            name: req.body.name
        }).then(function (result) {
            var id = result.dataValues.id;
            var name = result.dataValues.name;
            console.log("CustomerId that was created: ", id);
            db.Burger.update({
                devoured: req.body.devoured,
                CustomerId: id,
                include:[db.Customer]
            },
                {                    
                    where: {
                        id: req.params.id
                    },                    
                }).then(function (result) {
                    db.Burger.findAll({
                        include:[db.Customer]
                    }).then(function(result){
                        res.json(result);
                    }); 
                });
        });
    });

    app.get("/api/devBurgers/", function(req, res){

        db.Burger.findAll({
            include:[db.Customer]
        }).then(function(result){

            res.json(result);
        }); 
    });
};