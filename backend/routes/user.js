const express = require("express");

//controllers
const {
  getAllRestaurants,
  getRestaurantByName,
  getMealByRestaurant,
  addMealToCart,
  deleteMealFromCart,
  getRestaurantById,
} = require("../controllers/user");

// Middleware
const authentication = require("../middlewares/authentication");

//!..........Create user router........................

const userRouter = express.Router();

//!.......... Router EndPoint .................

//todo  get
userRouter.get("/", getAllRestaurants);

// get (params methods)
userRouter.get("/name/:name", getRestaurantByName);


// get ( Double params methods)
userRouter.get("/:restaurant_id",getMealByRestaurant);


userRouter.get("/id/:id", getRestaurantById);



// post ( params methods)
userRouter.post("/:meal_id", authentication, addMealToCart);

//delete (params methods)

userRouter.delete("/delete/:meal_id", authentication, deleteMealFromCart);

module.exports = userRouter;
