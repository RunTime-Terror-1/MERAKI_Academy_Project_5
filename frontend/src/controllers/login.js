
const { hostUrl } = require("..");

export class Login {

  static async login({ email, password }) {
    try {
      const body = { email, password };
      const response = await axios.post(`${hostUrl}/login`, body);
      const data = response.data;
      if (response.status === 404) {
        return {
          success: false,
          message: "Email doesn't exist",
          token: "",
        };
      }
      if (response.status === 403) {
        return {
          success: false,
          message: "Incorrect password",
          token: "",
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
