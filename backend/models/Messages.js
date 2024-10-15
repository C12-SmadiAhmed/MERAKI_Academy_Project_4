const mongoose=require("mongoose") 

const messagesSchema=new mongoose.Schema({
carId:{ type: mongoose.Schema.Types.ObjectId, ref: "Post" },
sellerId:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
customerId:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
firstName:{type:String , require:true},
lastName:{type:String , require:true},
email:{type:String , require:true},
phoneNumber:{type:Number },
message:{type:String , require:true},
createdAt: { type: Date, default: Date.now }

})

module.exports=mongoose.model("Message",messagesSchema) 