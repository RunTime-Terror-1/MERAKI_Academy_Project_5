const { default: axios } = require("axios");

class User {
  static async getAllRestaurants({ token }) {
    try {
      const response = await axios.get(`${process.env.HOSTURL}/user/`, {
        headers: { authorization: `Bearer ${token}` },
      });
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

  static async getRestaurantByName({ token, restaurantName }) {
    const restaurantName = req.params.name;
    try {
      const response = await axios.get(
        `${process.env.HOSTURL}/user/${restaurantName}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      const result = response.data.result;
      if (result.length) {
        return {
          success: true,
          massage: `the restaurant name is: ${restaurantName}`,
          result: result,
        };
      } else {
        return{
          success: false,
          massage: `the restaurant with name  ${restaurantName} is not found now `,
        };
      }
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
}
