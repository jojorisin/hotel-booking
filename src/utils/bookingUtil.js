export const calculateNights = (arrivalDate, departureDate) => {
  if (arrivalDate && departureDate) {
    const timeDiff = departureDate.getTime() - arrivalDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
  return 0;
};
