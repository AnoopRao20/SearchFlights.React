import request from 'utils/request';

export const getCities = async name => {
  let url = 'http://localhost:3001/cities';

  if (name) url += `?name=${name}`;

  const opts = {
    method: 'get',
  };

  return request(url, opts);
};
