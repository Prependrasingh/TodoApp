const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error");
    console.error(error);
  }
};

module.exports = dbConnect;

console.log("DATABASE_URL =", process.env.DATABASE_URL);