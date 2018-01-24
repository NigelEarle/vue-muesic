import api from '../api';

export default {
  register(credentials) {
    return api().post('register', credentials);
  },
};
