import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type:"String",
        required:["true","Enter please name"],
        trim:"true"
    },
    email:{
        type:"String",
        required:["true","Enter please email"],
        unique:true
       
    },
});

export default  mongoose.model("user",schema)