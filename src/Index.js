
// require('dotenv').config({path: './env'})
import app from "./App.js";
import conectDB from "./db/index.js";
import dotenv from 'dotenv'


dotenv.config({path: './env'})

conectDB()
.then(()=>{
    app.on("Error", (error)=>{
        console.log("Error on Then in App", error);
        throw error
    })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is Running at This POrt : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB Connection failed -- , ", err);
})





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