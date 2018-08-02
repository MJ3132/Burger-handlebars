
var express= require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;
app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(methodOverride('_method'));
// handlebars set up

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");



var routes = require("./controllers/burgers_controller");

app.use(routes);



app.listen(PORT, function (){
    console.log("listening on port " + PORT);
});



