// Mongoose Schema
const mongoose = require('mongoose'),
UserSchema = new mongoose.Schema({
    username: {type: String, required: [true, 'Please Input new username'], minlength:[4,'Username is too short']},
    password: {type: String, required:[true, 'Password Required'], minlength:[8,'Password too short']},
    updated_at: Date,
    created_at: Date
});
module.exports = mongoose.model('User', UserSchema);