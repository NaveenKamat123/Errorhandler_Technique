import express from 'express';
import userrouter from './routes/user.js';
import errorMiddleware from './middlware/Error.js'
import { connectdb } from './config/db.js';

const app=express();

connectdb();
app.use('/user',userrouter);



app.listen(4000,()=>{
    console.log("server is working");
})

app.use(errorMiddleware)