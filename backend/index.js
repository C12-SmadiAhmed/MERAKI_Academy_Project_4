const express = require("express");
const cors = require("cors");
const db= require("./models/db")
require("dotenv").config()


const app = express();
const PORT = process.env.PORT ;
console.log(PORT) 

const usersRouter = require("./routes/Users")
const rolesRouter=require("./routes/Roles")

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/roles", rolesRouter);



// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
