var connection = require("./connection");

// fun helper function from in class activity to avoid sql injection
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// and another helper function to convert object key value pairs to SQL syntax
function objtoSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
      var queryString = `SELECT * FROM ` + table + ";";
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
      })
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = `INSERT INTO ` + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
          if (err) {
              throw err;
          }

          cb(result);
      })
    },
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = `UPDATE ` + table;

      queryString += ` SET `;
      queryString += objtoSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
          if (err) {
              
              console.log(err);
          }
          console.log("line 73")
          cb(result);
        })
    }
};

module.exports = orm;