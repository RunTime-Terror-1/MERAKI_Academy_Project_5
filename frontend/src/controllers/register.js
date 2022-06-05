const { hostUrl } = require("..");

class Register {
    static async register({firstName, lastName, email, password }) {
        try {
          const body = { firstName, lastName, email, password };
          const response = await axios.post(
            `${hostUrl}/register/4`,
            body,
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
}