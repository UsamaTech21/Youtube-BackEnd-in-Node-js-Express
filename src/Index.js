
// require('dotenv').config({path: './env'})
import conectDB from "./db/index.js";
import dotenv from 'dotenv'


dotenv.config({path: './env'})

conectDB()





// import express from 'express'
// const app = express()

// ( async()=>{

//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("Erroe: ", (error)=>{
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is Runing On :${process.env.PORT} PORT`);
//         })
        

//     } catch (error) {
//         console.error("ERROE:", error )
//         throw error
//     }

// })()