const express = require("express") 
const {categories, gitCarByCategories}=require("../controllers/categories")

const categorieRouter= express.Router()

categorieRouter.post("/createCategory",categories)
categorieRouter.get("/",gitCarByCategories)



module.exports=categorieRouter 
