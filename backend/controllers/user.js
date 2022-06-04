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
    const {restaurant_id, mealName } = req.params


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
        }
        res.status(200).json({
            success: true,
            massage: `The meal ${mealName} is found`,
            result: result,
        });
    });


};



//! ..................... End   getMealbyResturant ...............

const addMealToCart = (req, res) => {
    // console.log(25)
    // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    // console.log(req.params.mealName)
    console.log(req.token.cartId)
    

    res.status(200).json({
        success: true,
        massage: "ggg",

    });
}

module.exports = {
    getAllRestaurants,
    getRestaurantByName,
    getMealbyResturant,
    addMealToCart,
    getMealby
};
