const mongoose = require("mongoose");

// const config = require("config");

// const mongoURI = config.get("mongoURI");
require("dotenv").config({ path: "./config/.env" });
const mongoURI = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DataBase connected successfully`);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
