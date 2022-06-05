class Login {
  static async login({ email, password }) {
    try {
      const body = { email, password };
      const response = await axios.post(`${process.env.HOSTURL}/login`, body);
      const data = response.data;
      let responseMessage = "";
      if (response.status === 404) {
        return {
          success: false,
          message: "Email doesn't exist",
          result: "",
        };
      }
      if (response.status === 403) {
        return {
          success: false,
          message: "Incorrect password",
          result: "",
        };
      }
      return data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }
}
