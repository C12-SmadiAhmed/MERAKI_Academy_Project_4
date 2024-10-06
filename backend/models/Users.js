const mongoose= require("mongoose")
const bcrypt= require("bcrypt");


const userSchema= new mongoose.Schema({
firstName: {required: true , type:String  },
lastName: {required: true , type:String } , 
age: {required: true , type:Number } ,
password: {required: true , type:String } , 
email: {required: true , type:String , unique:true } , 
role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }

}); 

userSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  });
module.exports=mongoose.model("User",userSchema)
