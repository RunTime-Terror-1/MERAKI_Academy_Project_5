const connection = require("../models/db");

const register = (req, res) => {
  //create user
  const { firstName, lastName, gender, adders, email, password } = req.body;

  const userQuery =
    "INSERT INTO USERS (firstName,lastName,gender,email,password) values(?,?,?,?,?,?)";
  //hash password
  const data = [firstName, lastName, gender, adders, email, password, role_id];

  connection.query(userQuery, data, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        message: "The email already exists",
      });
    }
    //create cart after create user
    //connection .query(query,data,function)
    const cartQuery = "INSERT INTO carts (user_id) values(?)";
    connection.query(cartQuery, [result.insertId], (err, result) => {
      if (err) {
        return res.status(500).json({
          success: true,
          message: "Field in creating cart",
        });
      }
    });

    //create addressafter create user
    const addressQuery = "INSERT INTO Address (user_id) values(?)";
    connection.query(addressQuery, [result.insertId], (err, result) => {
      if (err) {
        return res.status(500).json({
          success: true,
          message: "Field in creating Address",
        });
      }
    });

    //send message to client
    res.status(201).json({
      success: true,
      message: "Account Created Successfully",
      results: result,
    });
  });
};
