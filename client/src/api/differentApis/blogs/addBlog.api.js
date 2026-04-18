import API from "../../axios";

export const addBlog = (data) => {
  return API.post("/blogs", data);
};