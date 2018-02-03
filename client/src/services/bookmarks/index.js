import api from '../api';

export default {
  fetchBookmarks(params) {
    return api().get('bookmarks', { params });
  },
};
