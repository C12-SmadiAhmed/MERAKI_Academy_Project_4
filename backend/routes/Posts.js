const express = require("express")
const {createPost,getAllPosts,deletePostbyId,updatePostbyId}=require("../controllers/Posts")

const authentication= require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const postRouter=express.Router()

postRouter.post("/createpost",createPost)

postRouter.get("/",authentication,getAllPosts)
postRouter.delete("/:id",authentication,deletePostbyId)
postRouter.put("/:id",authentication,updatePostbyId)

module.exports= postRouter 
