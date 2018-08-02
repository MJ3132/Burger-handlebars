
var orm = require('../config/orm');

var burger = {
    all: function (cb) {
        console.log(orm);
        
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create: function(cols,vals, cb){
        orm.insertOne("burgers",cols,vals,function (err,res){
            if (err) throw err;

            cb(res);
        });
    },

    update: function (condition, cb){
        orm.updateOne("burgers",condition, function(err,res){
            if (err) throw err;

            cb(res);
        });
    }
};


module.exports = burger;