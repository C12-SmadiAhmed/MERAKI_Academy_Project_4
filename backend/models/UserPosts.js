const mongoose=require("mongoose")

const postSchema= new mongoose.Schema({
carCondtion: {type:String , required:true} , 
made: {type:String , required:true} , 
model: {type:Number , required:true} , 
range : {type:Number , required:true} , 
price: {type:Number , required:true}, 
battery:{type:String} , 
engine:{type:Number } , 
author:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
location: {type:String , required:true} , 
carImage: {type:String } 
})

module.exports=mongoose.model("Post",postSchema)
