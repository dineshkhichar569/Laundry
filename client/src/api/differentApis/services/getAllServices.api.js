import API from "../../axios";

export const getAllServices = () => {
  return API.get("/services");
};