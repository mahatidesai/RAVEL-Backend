const vehicleModel = require("../models/vehicle.model");

class vehicleServices{
    static async registerVehicle(firebaseID, vehicleCompanyName,vehicleName, vehicleImage, vehicleDescription,vehicleType, vehicleSeater, vehicleRent,vehicleLocation, fuelType,registrationDate){
        try {
            const createVehicle = new vehicleModel({
                firebaseID,
                vehicleCompanyName,
                vehicleName,
                vehicleImage,
                vehicleDescription,
                vehicleType,
                vehicleSeater,
                vehicleRent,
                vehicleLocation,
                fuelType,registrationDate});
            return await createVehicle.save();
        } 
        catch (error) {
            throw error;    
        }
    }

    static async deleteVehicle(_id){
        try {
            const deleted = await vehicleModel.deleteOne({_id});
            return deleted;

        } catch (error) {
            throw(error);
        }
    }

    static async getAllVehicle(vehicleType, vehicleSeater){
        try {
            const vehicles = await vehicleModel.find({vehicleType, vehicleSeater});
            return vehicles;
        } catch (error) {
            throw(error)
        }
    }

    static async getOneVehicleData(_id){
        try {
            const vehicleData = await vehicleModel.find({_id});
            return vehicleData;
            
        } catch (error) {
            throw(error)
        }
    }

    static async getLendVehicleHistory(firebaseID){
        try {
            const lentVehicle = await vehicleModel.find({firebaseID});
            return lentVehicle;
        } catch (error) {
            throw(error)
        }
    }

    static async getAllVehicleData(){
        try {
            const response = await vehicleModel.find();
            return response;
        } catch (error) {
            throw(error);
        }
    }

    static async updateVehicle(_id, updateData){
        try {
            const response = await vehicleModel.findByIdAndUpdate(
                _id,
                {$set: updateData}
            );
            return response
            
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = vehicleServices;