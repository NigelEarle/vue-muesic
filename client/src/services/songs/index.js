import api from '../api';


export default {
  fetchSongs(credentials) {
    return api().post('songs', credentials);
  },

};
