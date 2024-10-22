const router = require("express").Router();
const vehicleController = require('../controllers/vehicle.controller');

router.post('/vehicle_registration', vehicleController.vehicleRegister);

router.get('/all_vehicle_data/:vehicleType/:vehicleSeater', vehicleController.getAllVehicle),

router.get('/get_one_vehicle_data/:_id', vehicleController.getOneVehicleData);

router.get('/get_lend_vehicle_history/:firebaseID', vehicleController.getLendHistory);

router.delete('/delete_vehicle/:_id', vehicleController.deleteVehicle);

router.get('/get_all_vehicle_data', vehicleController.getAllVehicleData);

router.put('/update_vehicle/:_id', vehicleController.updateVehicle); 

module.exports = router;