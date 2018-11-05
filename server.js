var express = require('express'); // Require the express module
var app = express(); // Create an express app
var flash = require('express-flash');
app.use(flash());
require('./server/config/mongoose'); //require the use of mongoose
var bodyParser = require('body-parser'); //require the body-parser
app.use(bodyParser.json()); //integrate body parser with the app
var path = require('path'); //require path
app.use(express.static(path.join(__dirname, './public/dist/public'))); //Setup static folder directory
const session = require('express-session'); // setup express session
app.set('trust proxy', 1);
app.use(session({
    secret:'ultimatesmash',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}));
require('./server/config/routes.js')(app);
app.listen(8000, function(){
    console.log("Listening on Port 8000")
});