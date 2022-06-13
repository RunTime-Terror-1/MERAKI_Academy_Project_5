import axios from "axios";

import { hostUrl } from "..";

export class Employee {
  static async createMeal({
    name,
    imgUrl,
    category,
    price,
    restaurant_id,
    token,
  }) {
    const body = {
      name,
      imgUrl,
      category,
      price,
      restaurant_id,
    };
    try {
      const response = await axios.post(`${hostUrl}/employee/`, body, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        serverError: error.response.data.message,
      };
    }
  }
  static async updateMeal({
    name,
    imgUrl,
    category,
    price,
    restaurant_id,
    mealId,
    token,
  }) {
    const body = {
      name,
      imgUrl,
      category,
      price,
      restaurant_id,
    };
    try {
      const response = await axios.put(`${hostUrl}/employee/${mealId}`, body, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        serverError: error.response.data.message,
      };
    }
  }
  
  static async getAllMeals({ token,restaurant_id }) {

    try {
      const response = await axios.get(`${hostUrl}/employee//meals/ ${restaurant_id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        serverError: error.response.data.message,
      };
    }
  }
}
