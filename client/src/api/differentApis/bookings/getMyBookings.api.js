import API from "../../axios";

export const getMyBookings = () => {
  return API.get("/bookings/mine");
};