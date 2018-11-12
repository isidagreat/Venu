var mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/venueusers', {useNewUrlParser: true});
module.exports = connection;