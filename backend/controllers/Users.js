const userModel=require("../models/Users")

const register= (req,res)=>{
const {firstName,lastName,age,password,email}=req.body

const user= new userModel({
    firstName,lastName,age,password,email

})
user.save().then((result)=>{
res.status(201).json({
    success: true , 
    message:"User registerd Successfully" , 
    newUser: result
})
}) .catch((err) => {
    if (err.keyPattern) {
      return res.status(409).json({
        success: false,
        message: `The email already exists`,
      });
    }
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  });
}

module.exports={
    register
}