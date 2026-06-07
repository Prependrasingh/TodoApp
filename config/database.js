const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected ho gya hai ram ram jii"))
    .catch((error) => {
        console.log("DB Connection Error");
        console.error(error);
    });
};

module.exports = dbConnect;