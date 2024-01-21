import { catchSyncError } from "../middlware/CatchSyncError.js";
import user from "../model/userSchema.js";
import ErrorHandler from "../utils/errorHandler.js"
export const newUser=catchSyncError(async(req,res,next)=>{
     
 
  await user.create({
         name:"naveen",
         email:"kamatnaveen645@gmail.com"
     });
 
  
 
     res.status(201).json({
         message:"user created successfully"
     
     })
    }
   
 )