import API from "../../axios";

export const deleteService = (id) => {
  return API.delete(`/services/${id}`);
};