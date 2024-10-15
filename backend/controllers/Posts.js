const postModel=require("../models/UserPosts")

const createPost=(req,res)=>{
const {carCondtion, 
  made , 
  model ,
  price ,
  range ,
  exteriorColor ,
  interiorColor ,
  drivetrain ,
  fueltype ,
  Transmission ,
  Convenience ,
  Entertainment ,
  Exterior ,
  Safety ,
  Enigne , 
  author ,
  location ,
  carImage, 
  sellersNote}=req.body

const post= new postModel({
  carCondtion, 
  made , 
  model ,
  price ,
  range ,
  exteriorColor ,
  interiorColor ,
  drivetrain ,
  fueltype ,
  Transmission ,
  Convenience ,
  Entertainment ,
  Exterior ,
  Safety ,
  Enigne , 
  author ,
  location ,
  carImage, 
  sellersNote
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

const getAllPosts = (req, res) => {
   
    postModel
      .find()
      .exec()
      .then((posts) => {
        if (posts.length) {
          res.status(200).json({
            success: true,
            message: `All the posts`,
            post: posts,
          });
        } else {
          res.status(200).json({
            success: false,
            message: `No posts Yet`,
          });
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

  const deletePostbyId=(req,res)=>{
    const id = req.params.id 
    postModel.findByIdAndDelete(id).then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `The Post with id => ${id} not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `Post deleted`,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  }

  const updatePostbyId=(req,res)=>{
const id =req.params.id 
const filter = req.body
Object.keys(filter).forEach((key) => {
    filter[key] == "" && delete filter[key];
  }); 
  postModel.findByIdAndUpdate({_id:id},req.body).then((result) => {
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `The Post with id => ${id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Post Updated`,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  });
  }

const getNumberOfPosts= async(req,res)=>{
try {
  const count= await postModel.countDocuments()
  res.status(200).json({Numberofposts :count})
} catch (error) {
  res.status(500).json({err})
}

}


module.exports={
    createPost , 
    getAllPosts, 
    deletePostbyId, 
    updatePostbyId, 
    getNumberOfPosts,
}


