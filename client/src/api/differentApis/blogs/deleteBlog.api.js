import API from "../../axios";

export const deleteBlog = (id) => {
  return API.delete(`/blogs/${id}`);
};