import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getListings = () => axios.get('http://localhost:5000/api/listings')
export const addListing = (listingData) => axios.post(`${API_URL}/listings`, listingData);
export const getBookingHistory = (customerId) => axios.get(`${API_URL}/bookings/history/${customerId}`);
