import api from '../api';

export default {
  fetchAllSongs() {
    return api().get('songs');
  },

  createSong(data) {
    return api().post('songs', data);
  },

  fetchSong(id) {
    return api().get(`songs/${id}`);
  },

};
