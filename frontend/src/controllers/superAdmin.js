import axios from "axios";
class SuperAdmin {
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

      return {
        success: true,
        message: "Admin Created Successfully",
        results: response,
      };
    } catch (error) {
      return {
        success: false,
        massage: "The email already exists",
        error,
      };
    }
  }

  static async deleteOwner({ ownerId, name }) {
    try {
      const response = await axios.delete(
        `${process.env.HOSTURL}/superAdmin/delete/owner`,
        {
          headers: { authorization: `Bearer ${token}` },
          data: { ownerId, name },
        }
      );
      return {
        success: true,
        message: "Owner Deleted Successfully",
        response,
      };
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }

  static async getAllRequests() {
    try {
      const response = await axios.get(
        `${process.env.HOSTURL}/superAdmin/delete/owner`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return {
        success: true,
        message: "All Requests",
        requests: response.data.requests,
      };
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }
  static async acceptRequest() {
    try {
      const response = await axios.get(
        `${process.env.HOSTURL}/superAdmin/delete/owner`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return {
        success: true,
        message: "All Requests",
        requests: response.data.requests,
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

const acceptRequest = (req, res) => {
  const { id, state } = req.body;
  const query = `UPDATE requests  SET state =? WHERE id=?`;
  connection.query(query, [state, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }

    res.status(200).json({
      success: true,
      massage: "Request State Change",
    });
  });
};

module.exports = {
  createOwner,
  deleteOwner,
  getAllRequests,
  acceptRequest,
};
