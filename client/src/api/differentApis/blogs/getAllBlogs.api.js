import API from "../../axios";

export const getAllBlogs = () => {
  return API.get("/blogs");
};