const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user.routes");
const vehicleRoute = require("./routes/vehicle.routes");
const rentRoute = require("./routes/rent.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000' 
  }));

app.use(express.json());

// Ensure the base route matches the path you are testing
app.use('/', userRoute);
app.use('/', vehicleRoute);
app.use('/', rentRoute);

module.exports = app;
