const connection = require("../models/db");

const getAllRestaurants = (req, res) => {
  const query = `SELECT * FROM restaurants `;
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }

    res.status(200).json({
      success: true,
      massage: "All the restaurants",
      result: result,
    });
  });
};
//! ...........END   getAllRestaurants .......................

const getRestaurantByName = (req, res) => {
  const restaurantName = req.params.name;
  const query = `SELECT * FROM restaurants WHERE name=?;`;
  const data = [restaurantName];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({ err });
    }
    if (result.length) {
      res.status(200).json({
        success: true,
        massage: `the restaurant name is: ${restaurantName}`,
        result: result,
      });
    } else {
      res.status(404).json({
        success: false,
        massage: `the restaurant name is ${restaurantName} is not found now `,
      });
    }
  });
};

//! ...........END getRestaurantByName ....................

//! ..................... End   getMealbyResturant ...............

const addMealToCart = (req, res) => {
  const { quantity, subTotal } = req.body;
  const cart_id = req.token.cartId;
  const mealId = req.params.meal_id;

  const query = `INSERT INTO cartItems(quantity,subTotal,cart_id,meal_id) VALUES (?,?,?,?);`;
  const data = [quantity, subTotal, cart_id, mealId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: "add meal to cart",
      result: result,

    });
  });
};
//! ...End addMeealtocart..........

const deleteMealFromCart = (req, res) => {
  const cart_id = req.token.cartId;
  const mealId = req.params.meal_id;

  const query = `DELETE FROM cartItems WHERE cart_id=? AND meal_id=?;`;

  const data = [cart_id, mealId];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!result.affectedRows) {
      return res.status(404).json({
        success: false,
        massage: `The meal: ${mealId} is not found`,
        err: err,
      });
    } else {
      res.status(200).json({
        success: true,
        massage: `Succeeded to delete meal with id: ${mealId}`,
        result: result,
      });
    }
  });

};
//! ........END deleteMealfromCart.....

const senOrder=(req,res)=>{
const user_id=req.token.userId
const meal_id=req.params.meal_id
const {quantity,receipt}=req.body


const query = `INSERT INTO orders(quantity,receipt,user_id,meal_id) VALUES (?,?,?,?);`;
const data = [quantity, receipt,user_id, meal_id];
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
            massage: "add meal to Order",
            result: result,
        });

    }
   
});

};


module.exports = {

    getAllRestaurants,
    getRestaurantByName,
    getMealByRestaurant,
    addMealToCart,
    deleteMealFromCart,
    senOrder


};
