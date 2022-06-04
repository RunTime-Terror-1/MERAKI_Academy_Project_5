const connection = require("../models/db");


const getAllRestaurants = (req, res) => {
    const query = `SELECT * FROM restarents `;
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

    const restarentName = req.params.name;

    const query = `SELECT * FROM restarents WHERE name=?;`;
    const data = [restarentName];

    connection.query(query, data, (err, result) => {
        if (err) {
            res.status(500).json({ err });
        }
        if (result.length) {
            res.status(200).json({
                success: true,
                massage: `the restaurant name is: ${restarentName}`,
                result: result,
            });
        } else {
            res.status(404).json({
                success: false,
                massage: `the resturant name is ${restarentName} is not found now `,
            });
        }
    });
};

//! ...........END getRestaurantByName ....................
const getMealbyResturant = (req, res) => {
    const { restaurant_id, mealName } = req.params


    const query = `SELECT * FROM meals WHERE name=? AND restaurant_id=?;`;

    const data = [mealName, restaurant_id];
    connection.query(query, data, (err, result) => {
        if (err) {
            res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });
        }
        if (!result.length) {
            res.status(404).json({
                success: false,
                massage: "The meal is Not Found",
            });
        } else {
            res.status(200).json({
                success: true,
                massage: `The meal ${mealName} is found`,
                result: result,
            });
        }
    })
};
//! ..................... End   getMealbyResturant ...............

const addMealToCart = (req, res) => {
    const {quantity,subTotal} = req.body;
    const cart_id = req.token.cartId
    const mealId = req.params.meal_id;

    const query = `INSERT INTO cartItems(quantity,subTotal,cart_id,meal_id) VALUES (?,?,?,?);`;
    const data = [quantity,subTotal, cart_id, mealId];
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

const deleteMealfromCart = (req, res) => {

    const cart_id = req.token.cartId
    const mealId = req.params.meal_id;

    const query = `DELETE FROM cartItems WHERE cart_id=? AND meal_id=?;`;

    const data = [cart_id, mealId]

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
            massage: `The meal: ${mealId} is not found`,
            err: err,
          });
        }else{
            res.status(200).json({
                success: true,
                massage: `Succeeded to delete meal with id: ${mealId}`,
                result: result,
              });

        }
        
      });
};
//! ........END deleteMealfromCart.....
module.exports = {
    getAllRestaurants,
    getRestaurantByName,
    getMealbyResturant,
    addMealToCart,
    deleteMealfromCart

};
