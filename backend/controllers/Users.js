const userModel=require("../models/Users")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register= (req,res)=>{
const {firstName,lastName,age,password,email}=req.body
//const role= "670d7fd43540f14132b2adcf"  //Admin role
const role="670d7fa63540f14132b2adcd"  //user role 
const user= new userModel({
    firstName,lastName,age,password,email,role

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

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  userModel
    .findOne({ email })
    .populate("role", "-_id -__v")
    .then(async (result) => {
      if (!result) {
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
          author: result.firstName,
          role: result.role,
          
        };

        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getNumberOfusers= async(req,res)=>{
  try {
    const count= await userModel.countDocuments()
    res.status(200).json({NumberofUsers :count})
  } catch (error) {
    res.status(500).json({err})
  }
  
  } 



module.exports={
    register, login, getNumberOfusers
}