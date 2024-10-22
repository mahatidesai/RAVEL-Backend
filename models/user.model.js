const mongoose = require("mongoose");
const db = require("../config/db.js");

const { Schema } = mongoose;

const userSchema = new Schema({
    firebaseID:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    phone:{
        type: String,
        required: true,
        unique: true,
    },
    liscense:{
        type: String,
        unique: true,
        required: true,
    },
    registrationDate:{
        type: Date,
        required: true,
    }
});

const userModel = db.model("user", userSchema);
module.exports = userModel;