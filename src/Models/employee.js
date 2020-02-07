var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    department: {
        type: String
    }
});

module.exports = mongoose.model('Employee', Employee);