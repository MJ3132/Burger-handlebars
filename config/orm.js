
var connection = require('./connection');





var orm = {
    selectAll: function (tableInput, cb) {
        console.log(tableInput);
        var query = "SELECT * FROM " + tableInput;
        console.log("query" + query);
        connection.query(query, function (err, result) {
            if (err) throw err;

            cb(result);

        })

    },
    insertOne: function (tableInput, cols, vals, cb) {
        var query = "INSERT INTO" + tableInput + "(??)" +
            "VALUES (?,?)";
        connection.query(query, [cols, vals], function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    updateOne: function (tableInput, condition, cb) {
console.log("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";");
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function (err, result) {

            
            if (err) throw err;
            cb(result);
        });
    }
}
//     var query = "UPDATE" + tableInput;

//     query += " SET ";
//     query += objToSql(objColVals);
//     query += " WHERE ";
//     query += condition;

//     console.log(query);

//     connection.query(query, function (err, result) {
//         if (err) throw err;

//         cb(result);
//     });

// }



module.exports = orm; 