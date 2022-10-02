const express = require("express");
require("dotenv").config();
const dbconnect = require("./config/db");
const userRoutes = require("./routes/users");
const PORT = process.env.PORT || 5000;

// console.log(process.env.PORT);

dbconnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
