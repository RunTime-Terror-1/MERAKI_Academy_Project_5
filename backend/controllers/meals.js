const connection = require("../models/db");

const deleteMealById = (req, res) => {
  const mealId = req.params.mealId;
  const query = "Delete form meals where id=?";
  connection.query(query, [mealId], (err, result) => {
    if (err) {
      return res.status(200).json({
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
    const {name,category,price,size} = req.body;
    const query = "UPDATE meals SET name=? , category=?,price=?, size=? form meals where id=?";
    connection.query(query, [name,category,price,size,mealId], (err, result) => {
      if (err) {
        return res.status(200).json({
          success: false,
          message: "Server Error",
          err: err.message,
        });
      }
  
      res.status(403).json({
        success: false,
        message: "Item Updated",
        err: err.message,
      });
    });
  };
  


module.exports = { deleteMealById ,updateMealById};
