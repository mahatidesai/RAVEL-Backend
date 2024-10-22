const userServices = require("../services/user.services"); 
const vehicleModel = require('../models/vehicle.model');
//importing services so that we can make use of the registerUser function

//handling request and response from the frontend here
exports.register = async(req, res, next)=>{
    try {
        //req will have our data so we first get the data from req
        const {firebaseID, name, email, phone, liscense, registrationDate} = req.body;

        const response = await userServices.registerUser(firebaseID, name, email, phone, liscense,registrationDate);

        //after getting the data we need to response back to the frontend
        res.json({status:true, success: "User Registration Successfull"});

    } 
    catch (error) {
        console.error("Error: ", error);
        next(error);
    }
}

exports.getAllUserData = async(req,res,next)=>{
    try {
        const response = await userServices.getAllUserData();
        res.json({status: true, response});
    } 
    catch (error) {
        throw error;
    }
}

exports.getOneUserDetails = async(req,res,next)=>{
    try {
        const firebaseID = req.params.firebaseID;
        const userData = await userServices.getOneUser(firebaseID);
        res.json({status: true, userData});
    
    } catch (error) {
        next(error);
    }
}

exports.updateUser = async(req,res,next)=>{
    try {
        const _id = req.params._id;
        const updateData = req.body;
        const updatedData = await userServices.updateUser(_id, updateData);
        res.json({status: 200, updatedData}); 
        
    } catch (error) {
        next(error); 
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const _id = req.params._id;
        const firebaseID = req.params.firebaseID

        // First, delete the associated vehicles
        await vehicleModel.deleteOne({ firebaseID  }); // Adjust the field based on your schema

        // Then, delete the user
        const deleteData = await userServices.deleteUser(_id);
        res.json({ status: 200, success: "User and associated vehicles deleted successfully" });
    } catch (error) {
        next(error);
    }
};
