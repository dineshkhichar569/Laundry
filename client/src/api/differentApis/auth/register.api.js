import API from "../../axios";

export const register = (data) => {
  return API.post("/auth/register", data);
};