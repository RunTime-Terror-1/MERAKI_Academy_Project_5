const express = require("express");

const {getAllUsers } = require("../controllers/users");

const userRouter = express.Router();

//get
userRouter.get("",getAllUsers)

module.exports = userRouter;
