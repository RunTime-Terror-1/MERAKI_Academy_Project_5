const express = require("express");


//controllers
const { getAllRestaurants, getRestaurantByName, getMealByRestaurant,addMealToCart,deleteMealFromCart,  senOrder} = require("../controllers/user");

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
userRouter.get("/res/:restaurant_id",  getMealByRestaurant)



// post ( params methods)
userRouter.post("/:meal_id",authentication,addMealToCart);


//post 
userRouter.post("/sent/:meal_id",authentication,senOrder);



//delete (params methods)
userRouter.delete("/delete/:meal_id",authentication,deleteMealFromCart);


module.exports = userRouter;