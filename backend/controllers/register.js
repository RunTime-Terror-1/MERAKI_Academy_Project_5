const connection = require("../models/db");

const register =()=>{


const {firstName,lastName,gender,adders,email,password} =req.body;
const query= 'INSERT INTO USERS (firstName,lastName,gender,adders,email,password) values(?,?,?,?,?,?)';

const data =[firstName,lastName,gender,adders,email,password,role_id];

connection.query(query,data,(err,result)=>{

    if (err){
        return res.json({
            success:false,
            message:'The email already exists'
        });
    }
        res.status(201).json({
            success: true,
            message: "Account Created Successfully",
            results:result
        });
    });
  };

module.exports={
    register,
}