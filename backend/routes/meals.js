const express = require("express");

const {createNewMeal,getAllMeals}=require("../controllers/meals")

const mealsRouter = express.Router();

mealsRouter.post("/",createNewMeal)
mealsRouter.get("/",getAllMeals)
module.exports = mealsRouter;
