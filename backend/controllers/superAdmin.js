const connection = require("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const createOwner = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users (firstName, lastName,  email, password, role_id) VALUES (?,?,?,?,?)`;
  const data = [firstName, lastName, email, encryptedPassword, 2];
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
      message: "Admin Created Successfully",
      results: result,
    });
  });
};
const deleteOwner = async (req, res) => {
  const { ownerId, name} = req.body;

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

module.exports = {
  createOwner,
  deleteOwner
};
