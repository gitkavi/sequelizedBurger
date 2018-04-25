var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb){
    orm.selectAll("burgers",function(res){
        cb(res);
    });
    },
    insertOne: function(cols, values,cb){
        console.log("inside burger.js insertOne: ");
        orm.insertOne("burgers",cols,values,function(res){
            console.log("Rows Affected: ",res.affectedRows);
            cb(res);
        });
    },
    updateOne: function(objCol, condition, cb){
        console.log("inside burger.js updateOne: ");
        orm.updateOne("burgers", objCol, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;