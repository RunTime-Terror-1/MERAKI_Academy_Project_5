class Register {
    static async register({firstName, lastName, email, password }) {
        try {
          const body = { firstName, lastName, email, password };
          const response = await axios.post(
            `${process.env.HOSTURL}/register/4`,
            body,
          );
          return {
            success: true,
            message: "Account Created Successfully",
            results: response.data.result,
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