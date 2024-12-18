const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},{ collection: 'users',timestamps: true, } );

module.exports = mongoose.model('User', UserSchema);
