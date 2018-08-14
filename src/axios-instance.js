import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://0.0.0.0:8000',
});