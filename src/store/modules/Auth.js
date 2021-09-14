const state = {
  user: null,
  users: [],
  isAuthenticated: false
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  REGISTER_USER(state, user) {
    state.users.unshift(user);
    state.isAuthenticated = true;
  },
  LOGOUT(state) {
    state.user = null;
    state.isAuthenticated = false;
  }
};

const actions = {
};

const getters = {
  user: (state) => state.user,
  users: (state) => state.users,
  isAuthenticated: (state) => state.isAuthenticated
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
