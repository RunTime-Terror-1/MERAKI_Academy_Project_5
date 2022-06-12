import axios from "axios"

import { hostUrl } from "..";

export class Owner {
  static createRequest ({restaurantName,token}){

        try {
            const response = await axios.post(
              `${hostUrl}/owner/request`,
              {restaurantName},
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
  static createRestaurant ({ location, lat, lng, name,token}){
        try {
            const body = { location, lat, lng, name,token};
            const response = await axios.post(
              `${hostUrl}/owner/restaurant`,
              body,
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
 static createEmployee ({firstName, lastName, email, password,restaurant_id,token }){
        try {
            const body = { firstName, lastName, email, password,restaurant_id };
            const response = await axios.post(
              `${hostUrl}/owner/employee`,
              body,
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
 static deleteEmployee ({employeeId})  {
        try {
            const response = await axios.delete(
              `${hostUrl}/owner/employee`,
              {
                headers: { authorization: `Bearer ${token}` },
                data: { employeeId},
              }
            );
            return response.data;
          } catch (error) {
            return {
              success: false,
              massage: "Server Error",
              error,
            };
          }
      };

 static getOwnerRequests ({token}){
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
 static getOwnerRestaurants ({token}){
  try {
    const response = await axios.get(`${hostUrl}/owner/restaurants`, {
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
}