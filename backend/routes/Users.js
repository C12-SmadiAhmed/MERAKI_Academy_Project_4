const express = require("express")
const {register}= require("../controllers/Users")

const usersRouter = express.Router();
usersRouter.post("/register", register);

module.exports = usersRouter;