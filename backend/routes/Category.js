const express = require("express") 
const multer = require('multer')
const path = require('path');

const {categories, gitCarByCategories}=require("../controllers/categories")

const categorieRouter= express.Router()


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});
const upload = multer({ storage });







categorieRouter.post("/createCategory",upload.single('carImage'),categories)
categorieRouter.get("/",gitCarByCategories)



module.exports=categorieRouter 
