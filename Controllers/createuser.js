const mongoose = require('mongoose');
const jwt=require("jsonwebtoken")
const user=require('../Models/userSchema');


const createusers=async(req,res)=>{
    try{
        const data=req.body;
            const users= await user.insertMany(data);
            // console.log(users);
            // res.status(200).json(users)
            const saved_user = await user.findOne({name:req.body.name})
            const token=jwt.sign({userId:saved_user._id},"qwertyuiopasdfghjklzxcvbnm",{expiresIn:"5d"});
            res.status(200).send({ "status": "success", "message": "Registration Success", "token": token })

    }catch(err){
        console.log(err.message);
    }
}

module.exports={createusers}