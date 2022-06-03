const connection = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  const data = [email];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        succses :false,
        message :"server error",
        
      });
    }

    if (!result.length) {
      return res.status(404).json({
        succses: false,
        message: "email dosen't exist",
      });
    } else {
      bcrypt.compare(password, result[0].password),
        (err, response) => {
          if (err) {
            return res.status(404).json({
              compareErr: err,
              succses: false,
              message:"password incoreect"
              
            });
          }
          const query="SELECT * FROM carts WHERE userId = ?";

          if (response) {
            const payload = {
              userId: result[0].userId,
              role: result[0].role.Id,
              cart: result[0].cartId,
              
            };

            const option = {
              expireIn: "1h",
            };

            const SECRET = process.env.SECRET;
            const token = jwt.sign(payload, SECRET, option);

            return res.status(200).json({
              succses: true,
              message: "welocme",
              token,
            });
          } else {
            return res.status(403).json({
              succses: false,
              message: "incorrect password",
            });
          }
        };
    }
  });
};

module.exports = {
  login,
};
