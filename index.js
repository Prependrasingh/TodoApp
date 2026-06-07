const express = require("express");
const app = express();
const cors = require("cors"); // ← add this

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors()); // ← add this, BEFORE routes
app.use(express.json());

const todoRoutes = require("../todoApp/routes/todos");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`server started successfully at port ${PORT}`);
});

const dbConnect = require("../todoApp/config/database");
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
});