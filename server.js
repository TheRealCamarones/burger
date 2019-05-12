var express = require("express");

var PORT = process.env || 3000;

var app = express();

app.use(express.static("public"));

// parse req body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

// import the routes for server access
var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
})