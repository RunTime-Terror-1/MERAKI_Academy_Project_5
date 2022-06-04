const connection = require("../models/db");

const createRequest = async (req, res) => {
  const ownerId = req.token.userId;
  const { restaurantName } = req.body;
  const query = `INSERT INTO requests (restaurantName,owner_Id,state) VALUES (?,?,?)`;
  const data = [restaurantName, ownerId, "In Progress"];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    res.status(201).json({
      success: true,
      message: "request Created Successfully",
      results: result,
    });
  });
};

const createRestaurant = async (req, res) => {
  const ownerId = req.token.userId;
  const { location, lat, lng, name } = req.body;
  const query = `INSERT INTO restaurants  (location,lat,lng,name,owner_Id) VALUES (?,?,?,?,?)`;
  const data = [location, lat, lng, name, ownerId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Restaurant Created Successfully",
      results: result,
    });
  });
};

module.exports = {
  createRequest,
  createRestaurant,
};
