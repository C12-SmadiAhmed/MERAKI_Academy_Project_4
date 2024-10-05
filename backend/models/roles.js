const mongoose=require("mongoose")

const rolesSchema=new mongoose.Schema({
    role : {required: true , type:String  }, 
    permissions: [{required: true , type:String }]
})

module.exports=mongoose.model("Role",rolesSchema)
