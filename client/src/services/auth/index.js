// import api from '../api';
import axios from 'axios';


export default {
  register(credentials) {
    return axios.post('http://localhost:8081/auth/register', credentials);
    // return api().post('auth/register', credentials);
  },
};
