/* eslint-disable consistent-return */
import axios from "axios";

export const getDoctorsData = async (lat, lng, type) => {
  try {
    const response = await axios.get(
      ` http://localhost:5000/api/searchdoctors`,
      {
        params: {
          lat,
          lng,
          type,
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
