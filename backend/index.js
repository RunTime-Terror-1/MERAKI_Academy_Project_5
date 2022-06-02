const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

//routers
const mealsRouter = require("./routes/meals");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const roleRouter = require("./routes/role");
const adminRouter = require("./routes/admin");

const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

// router middleware
app.use("/register", registerRouter);
app.use("/meals", mealsRouter);
app.use("/login", loginRouter);
app.use("/role", roleRouter);
app.use("/users", adminRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
