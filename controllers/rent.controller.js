const rentServices = require("../services/rent.services");

exports.rentDetails = async(req,res,next)=>{
    try {
        const {renterFirebaseID,ownerFirebaseID,vehicleID,bookedDate,dateRentFrom,dateRentTo} = req.body;
        const response = await rentServices.rentedVehicle(renterFirebaseID,ownerFirebaseID,vehicleID,bookedDate,dateRentFrom,dateRentTo);
        res.json({status: true, success: "Rent Information Successfully added"});
    } 
    catch (error) {
        throw error;
        
    }
}

exports.singleUserRentVehicle = async (req, res, next) => {
    try {
        const renterFirebaseID = req.params.renterFirebaseID;
        const rentData = await rentServices.singleUserRentDetails(renterFirebaseID);
        res.json({status: true, rentData});
    } catch (error) {
        next(error);
    }
}

exports.getAllRentedVehicle = async(req,res,next)=>{
    try {
        const rented = await rentServices.getAllRentedVehicle();
        res.json({status: 200, rented}); 
    } catch (error) {
        next(error);
    }
}