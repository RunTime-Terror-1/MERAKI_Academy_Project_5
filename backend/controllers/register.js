const connection = require("../models/db");
const bcrypt =require=require("bcrypt");
const jwt =require("jsonwebtoken");


const register = (req, res) => {

    const salt =10;
    const hashpassword=await bcrypt.hash(password,salt);
    const role_id=req.params.id;
    //create user
  const { firstName, lastName, email, password } = req.body;

  const userQuery =
    "INSERT INTO USERS (firstName,lastName,email,password) values(?,?,?,?,?)";
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
