const express = require("express");


//controllers
   
    const {getAllRestaurants,} = require("../controllers/role");

const userRouter = express.Router();

roleRouter.post("/",getAllRestaurants );

module.exports = userRouter;