import API from "../../axios";

export const getAllReviews = () => {
  return API.get("/reviews");
};