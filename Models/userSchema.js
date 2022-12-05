const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    name:{
        type:String
    },
    phoneNo:{
            type:Number
    }
})

module.exports=mongoose.model('user',Schema)