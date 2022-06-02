const connection = require("../models/db");


const createNewMeal=(req,res)=>{


    const {name,imgUrl,category,price}=req.body

    const query = `INSERT INTO meals (name, imgUrl,category,price) VALUES (?,?,?,?);`;
    const data = [name, imgUrl,category,price];

    connection.query(query, data, (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            massage: "Server error",
            err: err,
          });
        }
        res.status(201).json({
          success: true,
          massage: "Meal created",
          meals: result,
        });
      });
};

