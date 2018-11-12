User = require('../models/user.js')
module.exports = {
new: function(req, res){
    console.log("Made it to the newUser controller")
    console.log("printing the received POST",req.body)
    //Creating a new user in the system
    var user = new User({
        username: req.body.userName,
        password: req.body.password,
        updated_at: new Date(),
        created_at: new Date()
    });
    // Save the new user to the Database
    user.save(function(err){
        if (err){
            // display any error messages
            for (var key in err.errors){
                req.flash('registration', err.error[key].message);
                console.log("Ooops There was an error", err.error[key].message);
            }
            return res.json({error:err})
        }
        else{
            console.log("Successfully created new user")
            res.json({message:user});
        }
    });
},
login: function(req, res){
    console.log("Made it to the log in controller");
    console.log("printing the received POST", req.body)
    User.findOne({username: req.body.userName, password: req.body.password}, (err, user)=>{
        if (err) {
            console.log("IN ERRORS");
            return (res.json("errs:err"));
        }
        else {
            console.log("IN Success");
            console.log("Success");
            req.session._id = user._id;
            console.log(req.session)
            return res.json(user._id);
        }
    });
}
}