

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({


    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required:true,
        trim: true,
    },
    title: {
    type: String,
    enum: ['Mr', 'Mrs', 'Miss'],
    required: true,
    },
    email:{
        type: String,
        trim:true,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
    type: String,
    required: true,
    trim: true,
    },

  
},{timestamps: true});

module.exports = mongoose.model('Author', authorSchema);