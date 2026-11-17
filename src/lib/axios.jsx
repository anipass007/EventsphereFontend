import axios from "axios";

//Create ek axios instance hai

const api = axios.create({
  baseURL: "https://eventsphere-server-mfdb.onrender.com",
});

api.interceptors.request.use(
  (req) => {
    req.headers.token = "secret-token"
    return req;
  },
  (err) => {},
);

api.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (err) => {},
);

export default api;
