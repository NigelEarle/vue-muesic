import api from '../api';

export default {
  fetchSongs(params) {
    return api().get('history', { params });
  },
  postSong(history) {
    return api().post('history', { history });
  },
};
