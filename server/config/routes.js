module.exports = function(app){
    const routes = require('../controllers/users.js')
    var path = require('path')
    app.get('/', function(req, res){
        res.sendFile('index');
    });
    app.get('/venues', function(req, res){
        routes.venues(req,res);
    });
    app.post('/api/new', function(req,res){
        console.log("Made it to new user in Routes")
        routes.new(req, res);
    });
    app.post('/api/login', function(req,res){
        console.log("Made it to login user in Routes")
        routes.login(req, res);
    })
    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}