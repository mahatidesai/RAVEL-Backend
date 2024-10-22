const app = require("./app");
const db = require("./config/db.js"); //importing database connection
const userModel = require('./models/user.model.js'); //Importing the user model

const port = 5000;
app.listen(port, ()=> {console.log(`Sever listening on the port: http://localhost:${port}`)});