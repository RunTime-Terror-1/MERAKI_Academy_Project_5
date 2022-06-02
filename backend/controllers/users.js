const connection = require("../models/db");
const getAllUsers = (req, res) => {
  const query = "SELECT * from users WHERE is_deleted = 0";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    if (result.length === 0) {
      return res.status(200).json({
        success: true,
        massage: "No user",
      });
    }
    res.status(200).json({
      success: true,
      massage: "All the users",
      users: result,
    });
  });
};

const deleteUserById = (req, res) => {
  const userId = req.params.userId;
  const query = "DELETE from users WHERE id = ?";
  connection.query(query, [userId], (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: "User is deleted",
    });
  });
};

const createAdmin = (req, res) => {
  const { email, password, firstName, lastName, role_id } = req.body;
  const data = [email, password, firstName, lastName, role_id];
  const query =
    "INSERT INTO users (email, password, firstName, lastName, role_id) VALUES (?,?,?,?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    res.status(201).json({
      success: true,
      massage: "Admin Created",
    });
  });
};
const deleteAdmin = (req, res) => {
    const adminId = req.params.adminId; 
    
    const query =
      "DELETE FROM users WHERE id=?";
    connection.query(query, [adminId], (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }
      res.status(201).json({
        success: true,
        massage: "Admin Deleted",
      });
    });
  };


module.exports = { deleteUserById, getAllUsers,createAdmin };
