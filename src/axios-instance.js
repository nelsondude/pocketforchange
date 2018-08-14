import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

if (localStorage.getItem('token') !== null) {
  axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('token');
}

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://0.0.0.0:8000',
});