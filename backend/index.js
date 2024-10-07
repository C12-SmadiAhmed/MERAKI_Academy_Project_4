const express = require("express");
const cors = require("cors");
const db= require("./models/db")
require("dotenv").config()


const app = express();
const PORT = process.env.PORT ;


const usersRouter = require("./routes/Users")
const rolesRouter=require("./routes/Roles")
const postRouter=require("./routes/Posts")
const admiPostRouter=require("./routes/AdminPosts")
const categorieRouter=require("./routes/Category")

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/posts", postRouter);
app.use("/Adminposts", admiPostRouter);
app.use("/category", categorieRouter);


app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

