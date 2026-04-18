import API from "../../axios";

export const trackBooking = (trackingId) => {
  return API.get(`/bookings/track/${trackingId}`);
};