// Dependencies
var express = require("express");//creating own api 
// var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 8080;


app.use(express.static("./app/public/home.html"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app, path);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});