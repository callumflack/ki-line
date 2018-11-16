export function state() {
  return {
    currentPage: "/",
    isMobileNavVisible: false
  };
}

export const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },

  SET_MOBILENAV_VISIBILITY(state, visibility) {
    state.isMobileNavVisible = visibility;
  }
};
