module.exports = function(app){
    const routes = require('../controllers/DBCONT.js')
    var path = require('path')
    app.get('/', function(req, res){
        res.sendFile('index');
    });
    app.get('/venues', function(req, res){
        routes.venues(req,res);
    });
    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}