const commentModel=require("../models/Comments")

const createComment=(req,res)=>{
const {comment,author}=req.body

const comments=new commentModel({
    comment,author
})
comments.save().then((result)=>{
    res.status(201).json({
        success: true , 
        message:"comment created Successfully" , 
        newUser: result
    })}).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          })
    })


}

module.exports={createComment}