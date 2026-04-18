import API from "../../axios";

export const addReview = (data) => {
  return API.post("/reviews", data);
};