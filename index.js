import process from "process";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.POT_TOMATO == "pot tomato");
