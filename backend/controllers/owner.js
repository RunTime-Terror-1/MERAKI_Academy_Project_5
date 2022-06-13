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
  const { location, lat, lng, name, orders, Logo, rest_category } = req.body;
  const query = `INSERT INTO restaurants  ( location, lat, lng, name, orders, backImg, rest_category,owner_id) VALUES (?,?,?,?,?,?,?,?)`;
  const data = [location, lat, lng, name, orders, Logo, rest_category, ownerId];
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
const createEmployee = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users (firstName, lastName,  email, password, role_id) VALUES (?,?,?,?,?)`;
  const data = [firstName, lastName, email, encryptedPassword, 3];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "The email already exists",
        err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Employee Created Successfully",
      results: result,
    });
  });
};
const deleteEmployee = (req, res) => {
  const { employeeId } = req.body;

  const query = `UPDATE users SET is_deleted =1 WHERE id=?`;

  connection.query(query, [employeeId], (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }

    res.status(200).json({
      success: true,
      message: "Owner Deleted Successfully",
      results: result,
    });
  });
};
const getAllEmployee = (req, res) => {
  const owner_id = req.token.userId;
  const query = "SELECT * FROM restaurants WHERE owner_id = ? ";
  connection.query(query, [owner_id], (err, restaurants) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (restaurants.length) {
      res.status(200).json({
        success: true,
        message: "All Restaurants",
        restaurants,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
        requests: [],
      });
    }
  });
};

const getOwnerRestaurants = (req, res) => {
  const owner_id = req.token.userId;
  const query = "SELECT firstName,lastName,restaurantName,state, email, requests.id  FROM users INNER JOIN requests ON requests.owner_id =?";
  connection.query(query, [owner_id], (err, restaurants) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (restaurants.length) {
      res.status(200).json({
        success: true,
        message: "All Restaurants",
        restaurants,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
        requests: [],
      });
    }
  });
};
const getOwnerRequests = (req, res) => {
  const owner_id = req.token.userId;
  const query = "SELECT * FROM requests WHERE owner_id = ? ";
  connection.query(query, [owner_id], (err, requests) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (requests.length) {
      res.status(200).json({
        success: true,
        message: "All Requests",
        requests: requests,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
        requests: [],
      });
    }
  });
};

module.exports = {
  createRequest,
  createRestaurant,
  createEmployee,
  deleteEmployee,
  getOwnerRequests,
  getOwnerRestaurants
};
