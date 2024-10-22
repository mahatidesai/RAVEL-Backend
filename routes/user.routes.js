const router = require("express").Router();
const userController = require("../controllers/user.controller");


router.post('/user_registration', userController.register);

router.get('/get_all_user_data', userController.getAllUserData);

router.get('/get_one_user_details/:firebaseID',userController.getOneUserDetails);

router.put('/update_user/:_id', userController.updateUser); 

router.delete('/delete_user/:_id/:firebaseID', userController.deleteUser);

module.exports = router;
