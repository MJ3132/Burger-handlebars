
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

    updateOne: function (tableInput, condition, cb) {
        connection.query(
            "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition,
            function (err, result) {
                if (err) {
                    return res.status(500).end();
                }
               
                cb(result);
            });
    },

    create: function (tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val +"');", function (err, result) {
            if (err) throw err;

            cb(result);

        })
    }


}


module.exports = orm; 