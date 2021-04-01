var mongoose = require( 'mongoose' );
var crypto = require('crypto');


var usersSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        unique: true,
    },
    hash: String,
    salt: String
});