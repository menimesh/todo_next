import { asyncError } from "../../../middlewares/error";
const handler = asyncError(async (req,res)=>{
    const {name, email, password} = req.body;
});
 export default handler