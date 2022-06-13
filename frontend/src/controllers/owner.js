import axios from "axios";

import { hostUrl } from "..";

export class Owner {
  static async createRequest({ restaurantName, token }) {
    try {
      const response = await axios.post(
        `${hostUrl}/owner/request`,
        { restaurantName },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        error,
      };
    }
  }
  static async createRestaurant({
    location,
    lat,
    lng,
    name,
    token,
    Logo,
    category,
  }) {
    try {
      const body = {
        location,
        lat,
        lng,
        name,
        Logo,
        rest_category: category,
        token,
      };

      const response = await axios.post(`${hostUrl}/owner/restaurant`, body, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        error,
      };
    }
  }
  static async createEmployee({
    firstName,
    lastName,
    email,
    password,
    restaurant_id,
    shift,
    salary,
    weeklyHours,
    token,
  }) {
    try {
      const body = { firstName, lastName, email, password, restaurant_id };
      const response = await axios.post(`${hostUrl}/owner/employee`, body, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Error",
        error,
      };
    }
  }
  static async deleteEmployee({ employeeId, token }) {
    try {
      const response = await axios.delete(`${hostUrl}/owner/employee`, {
        headers: { authorization: `Bearer ${token}` },
        data: { employeeId },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }
  static async deleteRequest({ requestId, token }) {
    try {
      const response = await axios.delete(`${hostUrl}/owner/request`, {
        headers: { authorization: `Bearer ${token}` },
        data: { requestId },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }
  static async getOwnerRequests({ token }) {
    try {
      const response = await axios.get(`${hostUrl}/owner/requests`, {
        headers: { authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return {
        success: "false",
        massage: "Server Error",
        error,
      };
    }
  }
  static async getOwnerRestaurants({ token }) {
    try {
      const response = await axios.get(`${hostUrl}/owner/restaurants`, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return {
        success: "false",
        massage: "Server Error",
        error,
        restaurants: [],
      };
    }
  }

  static async updateRequest({ requestId, state, token }) {
    try {
      const response = await axios.put(
        `${hostUrl}/owner/request`,
        { requestId, state },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return {
        success: true,
        massage: "Request State Change",
      };
    }
  }
  static async deleteRestaurant({ id, token }) {
    try {
      const response = await axios.delete(`${hostUrl}/owner/restaurant`, {
        headers: { authorization: `Bearer ${token}` },
        data: { id },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }
}
