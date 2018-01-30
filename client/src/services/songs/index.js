import api from '../api';

export default {
  fetchAllSongs() {
    return api().get('songs');
  },

};
