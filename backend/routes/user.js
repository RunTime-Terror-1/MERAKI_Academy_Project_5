const express = require("express");


//controllers
const { createNewRole } = require("../controllers/role");

const userRouter = express.Router();

roleRouter.post("/", createNewRole);

module.exports = userRouter;