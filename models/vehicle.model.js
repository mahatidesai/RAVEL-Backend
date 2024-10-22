const mongoose = require("mongoose");
const db = require("../config/db.js");

const {Schema} = mongoose;

const vehicleSchema = new Schema({
    firebaseID:{
        type: String,
        required: true,
    },
    vehicleCompanyName: {
        type: String,
        required: true,
    },
    vehicleName: {
        type: String,
        required: true,
    },
    vehicleImage: {
        type: [String],
        required: true,
    },
    vehicleDescription: {
        type: String,
        
    },
    vehicleType:{
        type: String,
        required: true,
    },
    vehicleSeater:{
        type: String,
        required: false,
    },
    vehicleRent:{
        type: Number,
        required: true,
    },
    vehicleLocation:{
        type: String,
        required:true,
    },
    fuelType:{
        type: String,
        required: true,
    },
    registrationDate: {
        type:Date,
        required: true,
    },
});

const vehicleModel = db.model("vehicle", vehicleSchema);
module.exports = vehicleModel;