import axios from "axios";

const URL = "http://localhost:8085";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/api/user/signup`, data);
  } catch (error) {
    console.log("Error while signup api", error);
  }
};

export const authenticateLogIn = async (data) => {
  try {
    return await axios.post(`${URL}/api/user/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response;
  }
};
