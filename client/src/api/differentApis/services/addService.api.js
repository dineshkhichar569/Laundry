import API from "../../axios";

export const addService = (data) => {
  return API.post("/services", data);
};