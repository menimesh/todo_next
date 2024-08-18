export const errorHandler = (res,statusCode=500,message="Internal Server error")=>{
    return res.status(statusCode).json({
        success:false,
        message,

    });
}