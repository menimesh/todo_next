import mongoose from "mongoose";
import { serialize } from "cookie";
export const connectDB = async() =>{
const {connection} = await mongoose.connect(process.env.MONGO_URI,{
    dbName:"NextTodo",
});
console.log(`DataBase connected on ${connection.host}`)
};
export const cookieSetter = (res,token,set)=>{
    const token ="nimesh"
     res.setHeader("Set-Cookie",serialize("token",token,{
        path:"/",
        httpOnly:true,
        maxAge:set ? 60*60*1000 :0,
     }))
}