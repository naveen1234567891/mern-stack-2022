import mongoose from "mongoose";

async function connect(){
    await mongoose.connect("mongodb://localhost:27017/reporter")
    console.log("MongoDB Connection Is Successful");
}

export default connect;


