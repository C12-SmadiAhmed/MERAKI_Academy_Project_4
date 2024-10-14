const adminPostModel = require("../models/AdminPosts")

const createAdminPost=(req,res)=>{
    const {carCondtion,
      made,
      model,
      price,
      range,
      exteriorColor,
      interiorColor,
      drivetrain,
      fueltype,
      Transmission,
      Convenience,
      Entertainment,
      Exterior,
      Safety,
      Seating,
      location,
      carImage,
      sellersNote,}=req.body
    
    const post= new adminPostModel({
      carCondtion,
      made,
      model,
      price,
      range,
      exteriorColor,
      interiorColor,
      drivetrain,
      fueltype,
      Transmission,
      Convenience,
      Entertainment,
      Exterior,
      Safety,
      Seating,
      location,
      carImage,
      sellersNote,
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
    const getAllAdminPosts = (req, res) => {
        const userId = req.token.userId;
        adminPostModel
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
        adminPostModel.findByIdAndDelete(id).then((result) => {
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
      adminPostModel.findByIdAndUpdate({_id:id},req.body).then((result) => {
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













      module.exports={createAdminPost,getAllAdminPosts,deletePostbyId,updatePostbyId}