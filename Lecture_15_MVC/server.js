import express from 'express';
import mongoose from 'mongoose';
// import User from './models/User.js';

const app = express();
app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://dasosnakul:AX45MyNj4An3QHC3@cluster0.pqbs3.mongodb.net/",{
      dbName:"Nodejs_Mastery_Course",  
    }
).then(()=>console.log("Mongodb Connected..!")).catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.render('index.ejs')
});

app.post('/form-submit',);

const port= 2000;

app.listen(port,()=>console.log(`server is running on port ${port}`))