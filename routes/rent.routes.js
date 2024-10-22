const router = require("express").Router();
const rentController = require("../controllers/rent.controller");

router.post('/rented', rentController.rentDetails);

router.get('/rented_vehicles_by_single_user/:renterFirebaseID', rentController.singleUserRentVehicle);

router.get('/get_all_rented_vehicle', rentController.getAllRentedVehicle);

module.exports = router;