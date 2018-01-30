import api from '../api';

export default {
  fetchAllSongs() {
    return api().get('songs');
  },

  createSong(data) {
    return api().post('songs', data);
  },

};
