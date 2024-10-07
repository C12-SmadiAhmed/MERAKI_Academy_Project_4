const mongoose=require("mongoose")

const adminPostSchema= new mongoose.Schema({
carCondtion: {type:String , required:true} , 
made: {type:String , required:true} , 
model: {type:Number , required:true} , 
range : {type:Number , required:true} , 
price: {type:Number , required:true}, 
battery:{type:String} , 
engine:{type:Number } , 
author:{ type: String }, 
location: {type:String , required:true} , 
carImage: {type:String } 
})

module.exports=mongoose.model("AdminPost",adminPostSchema) 
