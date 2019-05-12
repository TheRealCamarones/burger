var connection = require("./connection");

var orm = {
    selectAll: function(table) {
      var queryString = `SELECT * FROM ??`;
      connection.query(queryString, [table])
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
};

module.exports = orm;