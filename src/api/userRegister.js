/* eslint-disable consistent-return */
import axios from "axios";
export const userRegister = async (credentials) => {
  const { name, email, password, confirm_password } = credentials;
  try {
    const response = await axios.post(`/api/register`, {
      name,
      email,
      password,
      confirm_password,
    });
    // Handle response data here if needed
    console.log("response", response);
    return response;
  } catch (error) {
    // Handle errors here
    console.log("Error:", error);
    throw error; // If you want to propagate the error to the caller
  }
};

export default userRegister;
