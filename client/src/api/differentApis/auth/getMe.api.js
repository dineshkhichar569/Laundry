import API from "../../axios";

export const getMe = () => {
  return API.get("/auth/me");
};