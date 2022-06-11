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
  const query = `INSERT INTO restaurants  ( location, lat, lng, name, orders, Logo, rest_category) VALUES (?,?,?,?,?,?,?)`;
  const data = [location, lat, lng, name, orders, Logo, rest_category];
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
module.exports = {
  createRequest,
  createRestaurant,
  createEmployee,
  deleteEmployee,
};
