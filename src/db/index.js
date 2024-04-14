import mongoose from "mongoose";
import { DB_NAME } from "../Constent.js";


const conectDB = async ()=> { 

    try {
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
        console.log(`MOngoDB Connected ON DB_HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        
        console.error("Error Not Connect DB", error);
        process.exit(1)

    }

}
export default conectDB