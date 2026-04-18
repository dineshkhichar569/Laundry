import API from "../../axios";

export const updateBookingStatus = (id, status) => {
  return API.put(`/admin/bookings/${id}`, { status });
};