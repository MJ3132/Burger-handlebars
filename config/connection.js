
var mysql = require('mysql');


var connection = mysql.createConnection({

host: "localhost",
user : "root",
port: 3306,

database: "burgers_db",
password: "password"


});

connection.connect(function (err,res){
    if(err) throw err;

    console.log("you are connected!");

});


module.exports = connection;