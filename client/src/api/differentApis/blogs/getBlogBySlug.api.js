import API from "../../axios";

export const getBlogBySlug = (slug) => {
  return API.get(`/blogs/${slug}`);
};