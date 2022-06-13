const express = require("express");

const {
  createMeal,
  deleteMealFromRestaurant,
  updateMeal,
  getAllOrder,
} = require("../controllers/employee");

//!..........Create employee router........................
const employeeRouter = express.Router();

//!.......... Router  .................

//post
employeeRouter.post("/",  createMeal);

//delete
employeeRouter.delete("/:meal_id", deleteMealFromRestaurant);

//update
employeeRouter.put("/:id", updateMeal);

//get
employeeRouter.put("/:id",  getAllOrder);

module.exports = employeeRouter;
