require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the database");
  } catch (error) {
    console.error("couldn't connect to the database", error.message);
    process.exit(1);
  }
};

module.exports = dbconnect;
