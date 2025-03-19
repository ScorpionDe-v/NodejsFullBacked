import express from 'express'
import mongoose from 'mongoose';

const app=express();

mongoose.connect(
    "mongodb+srv://dasosnakul:AX45MyNj4An3QHC3@cluster0.pqbs3.mongodb.net/",{
        dbName:"Nodejs Mastery Course"
    }      
).then(()=>console.log("Mongodb Connected..!")).catch((err)=>console.log(err))

///////


const port =2000;

app.listen(port,()=>console.log(`server is running on port`))