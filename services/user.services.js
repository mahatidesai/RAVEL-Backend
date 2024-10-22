const userModel = require("../models/user.model");
//here the data will come from the user model therefore the user model is imported
class UserServices{
    static async registerUser(firebaseID, name, email, phone, liscense,registrationDate){
        try{
            const createUser = new userModel({firebaseID, name, email, phone, liscense,registrationDate});
            return await createUser.save(); //with this the data that will come from the user will be stored in the database
        }
        catch(err){
            throw err;
        }
    }

    static async getAllUserData(){
        try{
            const getAllUserData = await userModel.find();
            return getAllUserData;
        }
        catch(err){
            throw err;
        }
    }

    static async getOneUser(firebaseID){
        try {
            const getOneUserDetails = await userModel.find({firebaseID});
            return getOneUserDetails;    
        } catch (error) {
            throw(error);
        }
    }

    static async updateUser(_id, updateData){
        try {
            const updatedData = await userModel.findByIdAndUpdate(
                _id,
                {$set: updateData}
            );
            return updateData;
            
        } catch (error) {
            throw(error);
        }
    }

    static async deleteUser(_id){
        try {
            const deleteUser = await userModel.deleteOne({_id})
            return deleteUser
        } catch (error) {
            throw(error)
        }
    
    }

}

module.exports = UserServices;