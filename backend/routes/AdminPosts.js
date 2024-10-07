const express = require("express") 
const {createAdminPost,getAllAdminPosts,deletePostbyId,updatePostbyId}=require("../controllers/AdminPost")

const authentication= require("../middleware/authentication")
const authorization=require("../middleware/authorization") 

const adminPostRouter= express.Router()

adminPostRouter.post("/createadminpost",createAdminPost)

adminPostRouter.get("/",authentication,getAllAdminPosts)

adminPostRouter.delete("/:id",authentication,deletePostbyId)

adminPostRouter.put("/:id",authentication,updatePostbyId)


module.exports=adminPostRouter 

