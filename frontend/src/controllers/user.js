const { default: axios } = require("axios");

class User {
  static async getAllRestaurants() {
    try {
      const response = await axios.get(`${process.env.HOSTURL}/user/`);
      return {
        success: true,
        massage: "All the restaurants",
        result: response.data.result,
      };
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }

  static async getRestaurantByName({ restaurantName }) {
    try {
      const response = await axios.get(
        `${process.env.HOSTURL}/user/${restaurantName}`
      );
      const result = response.data.result;
      if (result.length) {
        return {
          success: true,
          massage: `the restaurant name is: ${restaurantName}`,
          result: result,
        };
      } else {
        return {
          success: false,
          massage: `the restaurant with name  ${restaurantName} is not found now `,
        };
      }
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }
  }

  static async getMealByRestaurant({ restaurant_id }) {
    try {
      const response = await axios.get(
        `${process.env.HOSTURL}/user/${restaurant_id}/meals`
      );
      const result = response.data.result;
      if (result.length) {
        return {
          success: true,
          massage: `The meal ${mealName} is found`,
          result: result,
        };
      } else {
        return {
          success: false,
          massage: "The meals is Not Found",
        };
      }
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }

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
    });
  }

  static async addMealToCart({ quantity, subTotal, meal_id, token }) {
    try {
      const body = { quantity, subTotal };
      const response = await axios.post(
        `${process.env.HOSTURL}/user/${meal_id}`,
        body,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      return {
        success: true,
        massage: "add meal to cart",
        result: response.data.result,
      };
    } catch (error) {
      return {
        success: false,
        massage: "Server error",
        err: error,
      };
    }
  }

  static async deleteMealFromCart({ meal_id, token }) {
    try {
      const response = await axios.delete(
        `${process.env.HOSTURL}/user/delete/${meal_id}`,
        body,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      return {
        success: true,
        massage: "Meal is deleted",
        result: response,
      };
    } catch (error) {
      return {
        success: false,
        massage: "Server error",
        err: error,
      };
    }
  }
}
