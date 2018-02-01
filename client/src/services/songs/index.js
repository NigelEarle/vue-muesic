import api from '../api';

export default {
  fetchAllSongs(search = '') {
    return api().get('songs', { params: { search } });
  },

  createSong(data) {
    return api().post('songs', data);
  },

  fetchSong(id) {
    return api().get(`songs/${id}`);
  },

  editSong(song) {
    return api().put(`songs/${song.id}`, song);
  },
};
