import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

let axios_args = {
  baseURL: 'http://0.0.0.0:8000',
};

if (localStorage.getItem('token')) {
  axios_args['headers'] = {'Authorization': 'JWT ' + localStorage.getItem('token')}
}
export default axios.create(axios_args);