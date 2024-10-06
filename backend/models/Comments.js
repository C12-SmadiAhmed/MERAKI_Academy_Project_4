const mongoose=require("mongoose")

const commentSchema=new mongoose.Schema({
    comment : {required: true , type:String  }, 
    author:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

module.exports=mongoose.model("Comment",commentSchema)
