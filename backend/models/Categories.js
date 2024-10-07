const mongoose=require("mongoose")

const categorieSchema= new mongoose.Schema({
    carCategorie : {type:String},
    carName: {type:String},
    carImage:{type:String}
})

module.exports=mongoose.model("Categories",categorieSchema) 
