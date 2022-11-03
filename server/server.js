import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 5000;
const app = express();

app.use(cors());

await mongoose.connect("mongodb://localhost:27017/expensor")
console.log("MongoDB Connection Is Successful");

app.get("/", (req, res) => {
    res.send("Hello PlayboxTV");
});

app.listen(PORT, () => {
    console.log(`Server Is Running At http://localhost:${PORT}`)
});


"mongodb://localhost:27017/chat"