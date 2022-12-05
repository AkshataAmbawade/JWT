const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/JWTUSER")
.then(()=>{
    console.log("Working fine");
})
.catch((err)=>{
    console.log(err.message
        );
})
const createus=require('./Routers/router')
app.use("/api/v1/create",createus);
app.listen(2001,()=>{
    console.log("Listening to the port number 2001");
})