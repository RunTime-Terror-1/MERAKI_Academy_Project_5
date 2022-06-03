const connection = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");


const login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";

  const data = [email];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (!result.length) {
      return res.status(404).json({
        succses: false,
        message:"email dosen't exist",
   
        
    });
  }
    else{
        bcrypt.compare(password,result[0].password,(err,response)=>{
            if(err){

               return res.json({
                   compareErr:err
               });
            }
               if(response){

                const payload={
                    userId:result[0].id,
                    role:result[0].role_id,
                };
                const option={
                    expiresIn:'1h'
                }
                const SECRECT=process.env.SECRECT;
                const token=jwt.sign(payload,option,SECRECT);

                res.status(200).json({
                    succses:true,
                    message:"Welcome",
                    token,
                });
               }

                
            }
        })
    }
  });
};
module.exports = {
  login,
};
