const express = require("express")
const {createPost}=require("../controllers/Posts")

const postRouter=express.Router()

postRouter.post("/createpost",createPost)

module.exports= postRouter 
