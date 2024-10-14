const mongoose=require("mongoose")

const postSchema= new mongoose.Schema({
carCondtion: {type:String , required:true} , 
made: {type:String , required:true} , 
model: {type:Number , required:true} , 
price: {type:Number , required:true}, 
range : {type:Number , required:true} , 
exteriorColor:{type:String , required:true},
interiorColor: {type:String , required:true},
drivetrain:{type:String , required:true},
fueltype:{type:String , required:true},
Transmission:{type:String , required:true},
Convenience:{type:String , required:true},
Entertainment:{type:String , required:true},
Exterior:{type:String , required:true},
Safety:{type:String , required:true},
Seating:{type:String , required:true},
author:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
location: {type:String , required:true} , 
carImage: {type:Array, required:true } , 
sellersNote:{type:String } , 
})

module.exports=mongoose.model("Post",postSchema)
