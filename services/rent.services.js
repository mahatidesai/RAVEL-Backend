const rentModel = require("../models/rent.model");

class rentServices{
    static async rentedVehicle(renterFirebaseID,ownerFirebaseID,vehicleID,bookedDate,dateRentFrom,dateRentTo){
        try {
            const createRent = new rentModel({
                renterFirebaseID,
                ownerFirebaseID,
                vehicleID,
                bookedDate,
                dateRentFrom,
                dateRentTo
            }); 
            return await createRent.save();    
        } 
        catch (error) {
            throw error;
        }
    }

    static async singleUserRentDetails(renterFirebaseID){
        try {
            const rentData = await rentModel.find({renterFirebaseID});
            return rentData;
        } catch (error) {
            throw(error);
        }
    }

    static async getAllRentedVehicle(){
        try {
            const rentedData = rentModel.find();
            return rentedData;
        } catch (error) {
            
        }
    }
}

module.exports = rentServices;