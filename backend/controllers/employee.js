const connection = require("../models/db");


const createMeal=(req,res)=>{

const {name,imgUrl,category,price,restaurant_id: restaurant_id}=req.body

const query = `INSERT INTO meals (name,imgUrl,category,price,restaurant_id) VALUES (?,?,?,?,?);`;
const data = [name,imgUrl,category,price,restaurant_id];

connection.query(query, data, (err, result) => {
    
    if (err) {
        res.status(500).json({
            success: false,
            massage: "Server error",
            err: err,
        });
    }else{
        res.status(200).json({
            success: true,
            massage: "creat meal to  ",
            result: result,
        });
    }
   
});

};
//!.......END CreatMeal ............

const deleteMealFromRestaurant=(req, res) => {
    
    const Id = req.params.meal_id;

    const query = `DELETE FROM meals WHERE id=?;`;

    const data = [ mealId]

    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });
        }

        ///...........
        if (!result.affectedRows) {
            return res.status(404).json({
                success: false,
                massage: `The meal: ${Id} is not found`,
                err: err,
            });
        } else {
            res.status(200).json({
                success: true,
                massage: `Succeeded to delete meal with id: ${Id}`,
                result: result,
            });

        }

    });
};
//!.......END    deleteMealfromResturant, ............

const updateMeal=(req,res)=>{

  const id=req.params.id

  const {name,imgUrl,category,price}=req.body

  const query = `UPDATE meals SET name=?,imgUrl=?,category=?,price=? WHERE id=?;`;

  const data = [name,imgUrl,category,price,id];
  connection.query(query, data, (err, result) => {
  if (err) {
    return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
    });
}

///...........
if (!result.affectedRows) {
    return res.status(404).json({
        success: false,
        massage: `The meal: ${id} is not found`,
        err: err,
    });
} else {
    res.status(200).json({
        success: true,
        massage: `Succeeded to delete meal with id: ${id}`,
        result: result,
    });

}

});

}
//!.......END updateMeal   ............

const getAllOrder=(req,res)=>{

    const   restaurant_id =req.params.id
    const query = `SELECT * FROM order  WHERE is_deleted=0 and restaurant_id=? `;
    const data = [restaurant_id];

    connection.query(query, data, (err, result) => {
        if (err) {
            res.status(500).json({ err });
        }
        if (result.length) {
            res.status(200).json({
                success: true,
                massage: `the restaurant name is: ${restaurant_id}`,
                result: result,
            });
        } else {
            res.status(404).json({
                success: false,
                massage: `the restaurant name is ${restaurant_id} is not found now `,
            });
        }
    });

}


module.exports = {
    createMeal,
   deleteMealFromRestaurant,
   updateMeal,
   getAllOrder


};