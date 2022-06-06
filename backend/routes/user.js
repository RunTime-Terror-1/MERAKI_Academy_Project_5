const express = require("express");

//controllers

const {
  getAllRestaurants,
  getRestaurantByName,
  getMealByRestaurant,
  addMealToCart,
  deleteMealFromCart,
  getRestaurantById,
  senOrder,
} = require("../controllers/user");





// Middleware
const authentication = require("../middlewares/authentication");

//!..........Create user router........................

const userRouter = express.Router();

//!.......... Router EndPoint .................

//todo  get method
// get 
userRouter.get("/", getAllRestaurants);

// get (params)
userRouter.get("/name/:name", getRestaurantByName);



// get (  params )
userRouter.get("/:restaurant_id",getMealByRestaurant);

// get ( params )
userRouter.get("/id/:id", getRestaurantById);

//...........................................................
//todo  post method
// post ( params methods)
userRouter.post("/:meal_id",authentication,addMealToCart);

// get ( Double params methods)

userRouter.get("/res/:restaurant_id",  getMealByRestaurant)


//post 
userRouter.post("/sent/:meal_id",authentication,senOrder);



//delete (params methods)
userRouter.delete("/delete/:meal_id",authentication,deleteMealFromCart);







//todo  exports router
module.exports = userRouter;
