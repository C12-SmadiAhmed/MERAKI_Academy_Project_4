const express = require("express")
const {createRole}= require("../controllers/Roles")

const rolesRouter = express.Router();
rolesRouter.post("/createrole", createRole);

module.exports = rolesRouter;