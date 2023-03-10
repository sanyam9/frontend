export const BACKEND_URL = 'http://localhost:8000/api/';
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

export const GET_COLLECTIONS_NAMES = {
  baseUrl: BACKEND_URL,
  url: 'collections/names',
  method: 'GET',
};

export const GET_COLLECTIONS = {
  baseUrl: BACKEND_URL,
  url: 'collections',
  method: 'GET',
};

export const CREATE_COLLECTION = {
  baseUrl: BACKEND_URL,
  url: 'collections',
  method: 'POST',
};

export const UPDATE_FIELD_BY_ID = (id) => ({
  baseUrl: BACKEND_URL,
  url: `collection/${id}`,
  method: 'PATCH',
});

export const GET_ENTRIES_BY_ID = (id) => ({
  baseUrl: BACKEND_URL,
  url: `entries/${id}`,
  method: 'GET',
});

// export const CREATE_ENTRY

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
