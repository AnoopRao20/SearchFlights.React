import request from 'utils/request';

export const getFlights = async params => {
  let url = 'http://localhost:3001/flights';

  const queryParams = [
    `sourceCity=${params.sourceCity}`,
    `destinationCity=${params.destinationCity}`,
    `travelDate=${params.travelDate}`,
  ];

  if (params.returnDate) queryParams.push(`returnDate=${params.returnDate}`);

  url += `?${queryParams.join('&')}`;

  const opts = {
    method: 'get',
  };

  return request(url, opts);
};
