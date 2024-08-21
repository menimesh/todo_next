import { connectDB, cookieSetter } from "../../../utils/features";
import { asyncError, errorHandler } from "../../../middlewares/error";
import {User} from "../../../models/user"
import { serialize } from "cookie";
const handler = asyncError(async (req,res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password) return errorHandler(res,400,"Please enter all the field")
        await connectDB();
    const user = await User.findOne({email});
    if(user) return errorHandler(res,400,"User registered with this Email");
    await User.create({
        name,
        email,
        password,
    });
 const token = "nimesh";
 cookieSetter(res,token,true)
 res.status(201).json({
    sucess:true,
    message:"user created sucessfuly"
 })

});
 export default handler