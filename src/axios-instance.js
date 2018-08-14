import axios from 'axios';
import store from 'store';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

let axios_args = {
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://0.0.0.0:8000',
};

const state = store.getState();
if (state.auth.loggedIn) {
  axios_args['headers'] = {'Authorization': 'JWT ' + state.auth.token}
}

export default axios.create(axios_args);