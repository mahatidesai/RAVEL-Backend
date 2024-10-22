const mongoose = require("mongoose");
const db = require('../config/db.js');

const {Schema} = mongoose;

const rentSchema = new Schema({
    renterFirebaseID: {
        type: String, 
        required: true,     
    },
    ownerFirebaseID: {
        type: String,
      required: true,
       
    },
    vehicleID: {
        type: String,
        required: true,
       
    },
    bookedDate:{
        type: Date,
        required: true,
    },
    dateRentFrom:{
        type: Date,
        required: true,
        
    },
    dateRentTo:{
        type: Date,
        required: true,
        
    },
});

const rentModel = db.model("rent", rentSchema);
module.exports = rentModel;