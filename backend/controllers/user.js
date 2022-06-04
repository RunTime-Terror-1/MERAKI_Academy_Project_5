const connection = require("../models/db");


const getAllRestaurants = (req, res) => {
    const query = `SELECT * FROM restarents `;
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
        massage: "All the restaurants",
        result: result,
      });
    });
  };

const getRestaurantByName=(req,res)=>{

    const restarentName = req.params.name;

    const query = `SELECT * FROM restarents WHERE name=?;`;
    const data = [restarentName];
  
    connection.query(query, data, (err, result) => {
      if (err) {
        res.status(500).json({ err });
      }
      if (result.length) {
        res.status(200).json({
          success: true,
          massage: `the restaurant name is: ${restarentName}`,
          result: result,
        });
      } else {
        res.status(404).json({
          success: false,
          massage: `the resturant name is ${restarentName} is not found now `,
        });
      }
    });
}


  module.exports = {
    getAllRestaurants,
    getRestaurantByName,
  };
  