const express = require("express");


//controllers
   
    const {getAllRestaurants,getRestaurantByName,} = require("../controllers/role");

const userRouter = express.Router();

// get
roleRouter.get("/",getAllRestaurants );

// get (params methods)
roleRouter.get("/:name",getRestaurantByName );


module.exports = userRouter;