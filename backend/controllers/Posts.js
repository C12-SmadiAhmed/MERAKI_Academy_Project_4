const postModel=require("../models/UserPosts")

const createPost=(req,res)=>{
const {carCondtion,made,model,range,price,battery,engine
    ,author,location,carImage}=req.body

const post= new postModel({
    carCondtion,made,model,range,price,battery,engine
    ,author,location,carImage
})
post.save().then((result)=>{
    res.status(201).json({
        success: true , 
        message:"Post created Successfully" , 
        newUser: result
    })}).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          })
    })

}

module.exports={
    createPost
}


