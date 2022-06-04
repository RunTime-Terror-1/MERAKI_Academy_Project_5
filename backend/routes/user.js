const express = require("express");

//controllers
const {
  getAllRestaurants,
  getRestaurantByName,
  getMealByRestaurant,
  addMealToCart,
  deleteMealFromCart,
} = require("../controllers/user");

// Middleware
const authentication = require("../middlewares/authentication");

//!..........Create user router........................

const userRouter = express.Router();

//!.......... Router EndPoint .................

// get
userRouter.get("/", getAllRestaurants);

// get (params methods)
// userRouter.get("/:name", getRestaurantByName);

// get ( Double params methods)
userRouter.get("/:restaurant_id",getMealByRestaurant);

// post ( params methods)
userRouter.post("/:meal_id", authentication, addMealToCart);

//delete (params methods)

userRouter.delete("/delete/:meal_id", authentication, deleteMealFromCart);

module.exports = userRouter;
