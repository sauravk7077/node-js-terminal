const process = require("process");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.MY_SECRET);