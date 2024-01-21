import mongoose from "mongoose";


export const connectdb=async ()=>{
   try{
  const {connection} =await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
 console.log('Connected with host'+connection.host);


   }

   catch(err){
    console.log(err);
   }
  
    


}
