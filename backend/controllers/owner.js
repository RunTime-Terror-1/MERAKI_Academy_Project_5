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
const deleteOwner = async (req, res) => {
  const { ownerId, name } = req.body;

  const query = `DELETE FROM users WHERE id=?`;

  connection.query(query, [ownerId], (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }

    const query = `DELETE FROM restaurants WHERE name=?`;
    connection.query(query, [name], (err, result) => {
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
  });
};
const getAllRequests = (req, res) => {
  const query = "SELECT * FROM requests WHERE is_deleted =0";
  connection.query(query, [], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (result.length) {
      res.status(200).json({
        success: true,
        message: "All Requests",
        requests: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "No Request",
      });
    }
  });
};
const acceptRequest = (req, res) => {
  const { id, state } = req.body;
  const query = `UPDATE requests  SET state =? WHERE id=?`;
  connection.query(query, [state, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }

    res.status(200).json({
      success: true,
      massage: "Request State Change",
    });
  });
};

module.exports = {
  createRequest,
  deleteOwner,
  getAllRequests,
  acceptRequest,
};
