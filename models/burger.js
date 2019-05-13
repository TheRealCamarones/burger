var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
      });
    },
    updateOne: function(cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;