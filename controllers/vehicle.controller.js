const vehicleServices = require("../services/vehicle.services");

exports.vehicleRegister = async(req,res,next)=>{
    try {
        const {firebaseID,vehicleCompanyName,vehicleName,vehicleImage, vehicleDescription,vehicleType, vehicleSeater, vehicleRent,vehicleLocation, fuelType, registrationDate} = req.body;

        const response = await vehicleServices.registerVehicle(firebaseID, vehicleCompanyName,vehicleName,vehicleImage, vehicleDescription,vehicleType, vehicleSeater, vehicleRent,vehicleLocation, fuelType,registrationDate);

        res.json({status: true, success: "Vehicle Registered Successfully"});       
    } 
    catch (error) {
        next(error);  
    }
}

exports.deleteVehicle = async(req,res,next)=>{
    try {
        const _id = req.params._id;
        const response = await vehicleServices.deleteVehicle(_id);
        res.json({status: true, success: "Vehicle Deleted Successfully"});
        
    } catch (error) {
        next(error);
    }
}



exports.getAllVehicle = async(req,res,next)=> {
    try {
        const vehicleType = req.params.vehicleType; 
        const vehicleSeater = req.params.vehicleSeater;
        const vehicles = await vehicleServices.getAllVehicle(vehicleType, vehicleSeater);
        res.json({status: true, vehicles});
    } catch (error) {
        next(error);
    }
}

exports.getOneVehicleData = async(req,res,next)=>{
    try {
        const _id = req.params._id;
        const vehicleInformation = await vehicleServices.getOneVehicleData(_id);
        res.json({status: true, vehicleInformation})
        
    } catch (error) {
        next(error)
    }
}

exports.getLendHistory = async(req,res, next)=>{
    try{
        const firebaseID = req.params.firebaseID;
        const lendHistory = await vehicleServices.getLendVehicleHistory(firebaseID);
        res.json({status: true, lendHistory});
    }catch(error){
        next(error);
    }
    
}

exports.getAllVehicleData = async(req,res,next)=>{
    try {
        const vehicle = await vehicleServices.getAllVehicleData();
        res.json({status: 200, vehicle});
        
    } catch (error) {
        next(error);
    }
}

exports.updateVehicle = async(req,res,next)=>{
    try {
        const _id = req.params._id;
        const updateData = req.body;
        const repsponse = await vehicleServices.updateVehicle(_id, updateData);
        res.json({status: 200, message: "Data updated"});
        
    } catch (error) {
        next(error);
    }
}