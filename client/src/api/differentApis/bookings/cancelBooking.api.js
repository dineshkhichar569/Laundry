import API from "../../axios";

export const cancelBooking = (id) => {
  return API.delete(`/bookings/${id}`);
};