import api from '../api';

export default {
  fetchBookmarks(params) {
    return api().get('bookmarks', { params });
  },
  postBookmark(bookmark) {
    return api().post('bookmarks', { bookmark });
  },
  deleteBookmark(bookmarkId) {
    return api().delete(`bookmarks/${bookmarkId}`);
  },
};
