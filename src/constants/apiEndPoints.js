export const BACKEND_URL = 'http://localhost:8000/';
export const AUTH_URL = 'http://localhost:5001/';

export const REGISTER = {
  baseUrl: AUTH_URL,
  url: 'register',
  method: 'POST',
};

export const LOGIN = {
  baseUrl: AUTH_URL,
  url: 'login',
  method: 'POST',
};

// export const GET_EVENTS = {
//   url: 'events',
//   method: 'GET',
// };

// export const UPDATE_RECORD_LIKE = (id) => ({
//   url: `events/${id}`,
//   method: 'PATCH',
// });

// export const GET_EVENT_BY_ID = (id) => ({
//   url: `events/${id}`,
//   method: 'GET',
// })
