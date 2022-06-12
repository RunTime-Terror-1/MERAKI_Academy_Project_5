const connection = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  console.log();
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  const data = [email];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "server error",
      });
    }

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "email doesn't exist",
      });
    } else {
      bcrypt.compare(password, result[0].password,
        (err, isMatch) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: "Server Error",
            });
          }
      
          if (isMatch) {
            const query = "SELECT * FROM carts WHERE  user_id = ?";
            connection.query(query, [result[0].id], (err, cartResult) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  message: "Server error",
                });
              }

              const payload = {
                userId: result[0].id,
                roleId: result[0].role_id,
                cartId: cartResult[0].id,
              };

          

              const SECRET = process.env.SECRET;
              const token = jwt.sign(payload, SECRET);

              return res.status(200).json({
                success: true,
                message: "Login Successful",
                token,
              });
            });
          } else {
            return res.status(403).json({
              success: false,
              message: "Incorrect password",
            });
          }
        });
    }
  });
};

module.exports = {
  login,
};
