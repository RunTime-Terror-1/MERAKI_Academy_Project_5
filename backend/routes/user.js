const express = require("express");


//controllers
   
    const {getAllRestaurants,getRestaurantByName,getMealbyResturant,} = require("../controllers/user");

const userRouter = express.Router();

// get
userRouter.get("/",getAllRestaurants );

// get (params methods)
userRouter.get("/:name",getRestaurantByName );

// get ( Double params methods)
userRouter.get("/:restaurant_id/:mealName",getMealbyResturant)



module.exports = userRouter;