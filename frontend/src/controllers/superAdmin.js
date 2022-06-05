import axios from "axios";
export class SuperAdmin {
  static async createOwner({ firstName, lastName, email, password, token }) {
    try {
      const body = { firstName, lastName, email, password };
      const response = await axios.post(
        `${process.env.HOSTURL}/superAdmin/owner`,
        body,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "The email already exists",
        error,
      };
    }
  }
  static async deleteOwner({ ownerId, name ,token}) {
    try {
      const response = await axios.delete(
        `${process.env.HOSTURL}/superAdmin/delete/owner`,
        {
          headers: { authorization: `Bearer ${token}` },
          data: { ownerId, name },
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
  }
  static async getAllRequests({token}) {
    try {
      const response = await axios.get(
        `${process.env.HOSTURL}/superAdmin/requests`,
        {
          headers: { authorization: `Bearer ${token}` },
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
  }
  static async acceptRequest({ requestId, state ,token}) {
    try {
      const response = await axios.put(
        `${process.env.HOSTURL}/superAdmin/requests`,
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
}

