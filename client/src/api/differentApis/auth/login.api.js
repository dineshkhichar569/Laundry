import API from "../../axios";

export const login = (data) => {
  return API.post("/auth/login", data);
};