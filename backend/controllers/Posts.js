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

const getAllPosts = (req, res) => {
    const userId = req.token.userId;
    postModel
      .find()
      .exec()
      .then((posts) => {
        if (posts.length) {
          res.status(200).json({
            success: true,
            message: `All the posts`,
            userId: userId,
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





module.exports={
    createPost , 
    getAllPosts, 
    deletePostbyId, 
    updatePostbyId
}


