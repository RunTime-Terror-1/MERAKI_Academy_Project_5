const connection = require("../models/db");


const deleteMealById = (req, res) => {
  const mealId = req.params.mealId;
  const query = "Delete form meals where id=?";
  connection.query(query, [mealId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    }

    res.status(200).json({
      success: false,
      message: "Item Deleted",
      err: err.message,
    });
  });
};

const updateMealById = (req, res) => {
    const mealId = req.params.mealId;
    const {name,category,imgUrl,price} = req.body;
    const query = `UPDATE meals SET name=? ,imgUrl=? ,category=?,price=? WHERE id=?;`;

    connection.query(query, [name,imgUrl,category,price,mealId], (err, result) => {
      console.log("sadasd");
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Server Error",
          err: err.message,
        });
      }
  
      res.status(403).json({
        success: false,
        message: "Item Updated",
        
      });
    });
  };
  


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
    createNewMeal,getAllMeals,deleteMealById ,updateMealById
  };
  

