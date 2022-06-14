const express = require("express");

const {
  createMeal,
  deleteMealFromRestaurant,
  updateMeal,
  getAllOrder,
  getAllMeals
} = require("../controllers/employee");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

//!..........Create employee router........................
const employeeRouter = express.Router();

//!.......... Router  .................

//post
employeeRouter.post("/",  createMeal);

//delete
employeeRouter.delete("/:meal_id", authentication,authorization("3"),deleteMealFromRestaurant);

//update
employeeRouter.put("/:mealId", updateMeal);

//get
employeeRouter.get("/:id",  getAllOrder);
employeeRouter.get("/meals/:restaurant_id",authentication,authorization("3"),  getAllMeals);

module.exports = employeeRouter;
