const mogoose= require("mongoose")
const bcrypt= require("bcryptjs")

const userSchema= new mogoose.Schema({
firstName: {required: true , type:String  },
lastName: {required: true , type:String } , 
age: {required: true , type:Number } ,
password: {required: true , type:String } , 
email: {required: true , type:String } , 
role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }

}); 

