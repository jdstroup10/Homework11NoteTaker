//requiring express
var express = require("express");

var app = express();

var PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(express.static(__dirname + '/public'));

//requiring HTML and API Routes
require("./public/assets/js/apiRoutes.js")(app);
require("./public/assets/js/htmlRoutes.js")(app);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));