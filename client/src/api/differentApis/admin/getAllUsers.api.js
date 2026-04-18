import API from "../../axios";

export const getAllUsers = () => {
  return API.get("/admin/users");
};