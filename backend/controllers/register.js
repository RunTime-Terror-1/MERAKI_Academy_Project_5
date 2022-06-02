const connection = require("../models/db");

const register =(req,res)=>{

const role_id=req.params.id;
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
    const query='INSERT INTO USERS (role_id) values (?)';
    
    connection.query(query,data,(err,result)=>{
    if(err){
    res.status(201).json({

        success:true,
        message:'create role succsess'
    })
    
    }
    else{
        res.status(500).json({
            success: true,
            message: "create role failed",
        })
    }
    });

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