const connection = require("../models/db");


const createNewMeal=(req,res)=>{


    const {name,imgUrl,category,price}=req.body

    const query = `INSERT INTO meals (name, imgUrl,category,price) VALUES (?,?,?,?);`;
    const data = [name, imgUrl,category,price];

    connection.query(query, data, (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            massage: "Server error",
            err: err,
          });
        }
        res.status(201).json({
          success: true,
          massage: "Meal created",
          meals: result,
        });
      });
};

//!........................................

const getAllMeals=(req,res)=>{

    const query = `SELECT * FROM meals WHERE is_deleted=0;`;
    connection.query(query, (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }
      res.status(200).json({
        success: true,
        massage: "All the Meals",
        meals: result,
      });
    });

};
//!....................................
module.exports = {
    createNewMeal,getAllMeals
  };
  