var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput,cb){
        var query = "SELECT * FROM "+tableInput+";";
        console.log("Query: ", query);
        connection.query(query, function(err, data){
            if(err) {
                throw err;
            }
            cb(data);
        });
    },
    insertOne: function(tableInput,cols, values,cb){
        var query = "INSERT INTO "+tableInput+"("+ cols+") VALUES ('"+values+"');";
        console.log("Query: ", query);
        connection.query(query, function(err, data){
            if(err){
                throw err;
            }
            cb(data);
        });
    },
    updateOne: function(tableInput,objCol, condition, cb){
        var devoured = objCol.devoured;
        var query = "UPDATE "+tableInput+" SET devoured="+devoured+" WHERE "+condition+";";
        console.log("Query: ", query);

        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;