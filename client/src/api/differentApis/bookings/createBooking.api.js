import API from "../../axios";

export const createBooking = (data) => {
  return API.post("/bookings", data);
};