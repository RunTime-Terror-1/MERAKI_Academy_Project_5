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