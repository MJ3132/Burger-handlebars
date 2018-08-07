
var orm = require('../config/orm');


// everytime the page refreshes both the create and update redirect the user to the homepage HTML Route , that is why
// there is a response
var burger = {
    all: function (cb) {
        console.log(orm);

        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    update: function (condition, cb) {
        orm.updateOne("burgers", condition, cb);
    },

    create: function(name,cb){
        orm.create('burgers',name, cb);
    }


};


module.exports = burger;