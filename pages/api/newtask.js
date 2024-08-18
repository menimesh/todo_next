import { connectDB } from "../../utils/features";
import { Task } from "../../models/task";
import mongoose from 'mongoose'; 
import { errorHandler } from "../../middlewares/error";
const handler = async (req, res) => {
   if(req.method !== "POST")
    return errorHandler(res,400,"Only post method is allowed")
    await connectDB();


    const {title,description}=req.body;
    const userId = new mongoose.Types.ObjectId();

    await Task.create({
        title: "Sample Title",
        description: "Sample Description",
        user: userId
    });

    res.json({
        success: true,
        message: "Task Created",
    });
};

export default handler;