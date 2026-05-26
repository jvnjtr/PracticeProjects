const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userId: {
        type: Number
    },

    name: {
        type: String,
        required: true
    },

    gender: {
        type: Number,
        default: 0
    },

    mobile: {
        type: Number
    },

    address: {
        type: String
    },

    userImage: {
        type: String
    },

    emailId: {
        type: String
    },

    userLoginId: {
        type: String
    },

    userPassword: {
        type: String
    },

    priviledge: {
        type: Number,
        default: 3
    },

    createdBy: {
        type: Number
    },

    updatedBy: {
        type: Number
    },

    createdOn: {
        type: Date,
        default: Date.now
    },

    updatedOn: {
        type: Date,
        default: Date.now
    },

    deletedFlag: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model(
    'user_master',
    userSchema
);