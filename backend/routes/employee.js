const express = require("express");


const {  creatMeal,
    deleteMealfromResturant,updateMeal,getAllorder
  } = require("../controllers/employee");

  //!..........Create employee router........................
const employeRouter = express.Router();

//!.......... Router  .................



//post 
employeRouter.post("/",creatMeal)

//delete
employeRouter.delete("/:meal_id",deleteMealfromResturant)

//update
employeRouter.put("/:id",updateMeal)


//get
employeRouter.put("/:id",getAllorder)


module.exports = employeRouter