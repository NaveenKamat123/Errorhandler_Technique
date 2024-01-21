

const  errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || 'Internal Error'
    err.statusCode=err.statusCode || 500

    if(err.code===11000){
        err.message='duplicate error'
        err.statusCode=400;
        
    }
  return  res.status(err.statusCode).json({
        "success":"false",
        "message":err.message
    })


}


export default errorMiddleware