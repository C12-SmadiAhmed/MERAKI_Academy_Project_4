const categoriesModel=require("../models/Categories")

const categories=(req,res)=>{
const {carCategorie ,carName}=req.body

const carImage=req.file.path

const newCategorie= new categoriesModel({carCategorie ,carName,carImage})

newCategorie.save().then((result)=>{
    res.status(201).json({
        success: true , 
        message:"Categorie created Successfully" , 
        new: result
    })}).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          })
    })

}
const gitCarByCategories=(req,res)=>{
const categorie= req.query.carCategorie
categoriesModel.find({carCategorie:categorie}).exec()
.then((posts) => {
  if (posts.length) {
    res.status(200).json({
      success: true,
      message: `all the cars in the categorie`,
      post: posts,
    });
  } else {
    res.status(200).json({
      success: false,
      message: `No categories Yet`,
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


}
module.exports={categories, gitCarByCategories}