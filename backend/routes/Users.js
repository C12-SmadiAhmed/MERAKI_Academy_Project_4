const express = require("express")
const {register,login,getNumberOfusers}= require("../controllers/Users")

const authentication= require("../middleware/authentication")
const authorization=require("../middleware/authorization")


const usersRouter = express.Router();
usersRouter.post("/register", register);
usersRouter.post("/login",login)

usersRouter.get("/numberofusers",authentication,
    authorization("EDIT_POSTS"),getNumberOfusers
)

module.exports = usersRouter;   