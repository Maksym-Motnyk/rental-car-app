import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.study';

export const fetchCars = async (currentPage) => {
  const res = await axios.get('/cars', {
    params: {
      page: currentPage,
      perPage: 12,
    },
  });
  return res.data.cars;
};

export const fetchCarById = async (id) => {
  const res = await axios.get(`/cars/${id}`);
  return res.data;
};

export const sendBooking = async (cardId, bookingData) => {
  const res = await axios.post(`/cars/${cardId}/booking-requests`, bookingData);
  console.log(res.data);

  return res.data;
};

export const fetchCarsApp = async (page, filters) => {
  const res = await axios.get('/cars', {
    params: {
      page,
      perPage: 12,
      brand: filters.brand || undefined,
      price: filters.price || undefined,
      minMileage: filters.minMileage || undefined,
      maxMileage: filters.maxMileage || undefined,
    },
  });

  return res.data.cars;
};
