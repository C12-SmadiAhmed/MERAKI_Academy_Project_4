const express = require("express")
const {createPost,getAllPosts,deletePostbyId,updatePostbyId,getNumberOfPosts}=require("../controllers/Posts")

const authentication= require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const postRouter=express.Router()

postRouter.post("/createpost",authentication,createPost)

postRouter.get("/",getAllPosts)
postRouter.delete("/:id",authentication,deletePostbyId)
postRouter.put("/:id",authentication,updatePostbyId)

postRouter.get("/numberofposts",authentication,
    authorization("EDIT_POSTS"),getNumberOfPosts
)

module.exports= postRouter 
