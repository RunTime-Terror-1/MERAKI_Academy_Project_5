const express = require("express");

const {deleteMealById,updateMealById} = require("../controllers/meals")

const mealsRouter = express.Router();


//update
mealsRouter.put("/:mealId",updateMealById)


//delete 
mealsRouter.delete("/delete/:mealId",deleteMealById)



module.exports = mealsRouter;
