import API from "../../axios";

export const getStats = () => {
  return API.get("/admin/stats");
};