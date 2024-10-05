const express = require("express");
const cors = require("cors");
const db= require("./models/db")


const app = express();
const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/Users")

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);



// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});