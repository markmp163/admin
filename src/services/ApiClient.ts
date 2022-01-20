import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' },
});

const requestHandler = (request: any) => {
  request.headers.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';

  return request;
};

const responseHandler = (response: any) => {
  if (response.status === 401) {
    // window.location = '/login';
  }

  return response;
};

const errorHandler = (error: any) => {
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
