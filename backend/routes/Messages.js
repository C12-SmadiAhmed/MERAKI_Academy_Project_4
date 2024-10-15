const express = require("express")
const {createMessages}=require("../controllers/Messages")

const authentication= require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const messageRouter=express.Router()

messageRouter.post("/",authentication,messageRouter)

module.exports= messageRouter

