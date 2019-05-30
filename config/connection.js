var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "fq059hylvcnaxb1i",
        password: "h1kh6n40mn36w6h2",
        database: "ooc4uzbbgyvdx0zi"
    })
};


connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;