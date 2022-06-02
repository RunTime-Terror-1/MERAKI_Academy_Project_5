const express = require("express");


const {deleteMealById,updateMealById,createNewMeal,getAllMeals} = require("../controllers/meals")

const mealsRouter = express.Router();


//update
mealsRouter.put("/:mealId",updateMealById)


//delete 
mealsRouter.delete("/delete/:mealId",deleteMealById)


mealsRouter.post("/",createNewMeal)
mealsRouter.get("/",getAllMeals)

module.exports = mealsRouter;
