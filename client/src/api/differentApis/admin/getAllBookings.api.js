import API from "../../axios";

export const getAllBookings = () => {
  return API.get("/admin/bookings");
};