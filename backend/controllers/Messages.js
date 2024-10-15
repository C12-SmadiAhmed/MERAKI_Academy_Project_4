const messagesModel= require("../models/Messages")

const createMessages=(req,res)=>{
const {
carId,
sellerId,
customerId,
firstName,
lastName,
email,
phoneNumber,
message,
createdAt,}=req.body

const messaege=new messagesModel({
    carId,
    sellerId,
    customerId,
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    createdAt,

})
messaege.save().then((result)=>{
    res.status(201).json({
        success: true , 
        message:"Message sent Successfully" , 
        newUser: result
    })}).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          })
    }) 
}

module.exports={createMessages}