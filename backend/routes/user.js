const express = require("express");


//controllers
const { getAllRestaurants, getRestaurantByName, getMealbyResturant,addMealToCart} = require("../controllers/user");

// Middleware
const authentication = require("../middlewares/authentication");


//!..........Create user router........................

const userRouter = express.Router();


//!.......... Router EndPoint .................

// get
userRouter.get("/", getAllRestaurants);

// get (params methods)
userRouter.get("/:name", getRestaurantByName);

// get ( Double params methods)
userRouter.get("/:restaurant_id/:mealName",  getMealbyResturant)

userRouter.post("/:mealName",authentication,addMealToCart);





module.exports = userRouter;