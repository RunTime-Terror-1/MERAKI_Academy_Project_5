const express = require("express");


const { deleteMealById, updateMealById, createNewMeal, getAllMeals, getMealByName, sortBycategory } = require("../controllers/meals")

const mealsRouter = express.Router();


//update
mealsRouter.put("/:mealId", updateMealById);


//delete 
mealsRouter.delete("/delete/:mealId", deleteMealById);

// post 
mealsRouter.post("/", createNewMeal);
//GET
mealsRouter.get("/", getAllMeals);

//GET /search1/:name
mealsRouter.get("/search1/:name", getMealByName);

//GET /search2/:categorty
mealsRouter.get("/search2/:category", sortBycategory);

module.exports = mealsRouter;
