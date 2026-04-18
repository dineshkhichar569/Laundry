import API from "../../axios";

export const updateService = (id, data) => {
  return API.put(`/services/${id}`, data);
};