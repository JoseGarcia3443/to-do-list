import Vue from 'vue'

const state = {
  user: null,
  users: [],
  isAuthenticated: false
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
    state.isAuthenticated = true;
  },
  REGISTER_USER(state, payload) {
    state.users.unshift(payload);
    state.isAuthenticated = true;
  },
  LOGOUT(state) {
    state.user = null;
    state.isAuthenticated = false;
  }
};

const actions = {
  registerUser({ commit }, payload) {
    const rand = Math.floor(Math.random() * 100);
    try {
      commit('REGISTER_USER', { id: rand, ...payload})
      commit('SET_USER', { id: rand, ...payload})
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'success',
        title: `Welcome! ${payload.name}`
      })
    } catch (error) {
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        icon: 'error',
        title: 'Server Error, please try again or later'
      })
    }
  },
  userLogin({ dispatch, state }, payload) {
    try {
      const data = state.users.find(user => user.email === payload.email)
      data ? dispatch('checkPassword', { data, login: payload }) : dispatch('userNotFound')
    } catch (error) {
      console.log(error)
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        icon: 'error',
        title: 'Server Error, please try again or later'
      })
    }
  },
  logOut({ commit }) {
    commit('LOGOUT')
    Vue.swal({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      icon: 'success',
      title: 'See you soon'
    })
  },
  checkPassword({ commit }, payload) {
    if (payload.data.password === payload.login.password) {
      commit('SET_USER', payload.data)
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Success Login'
      })
    } else {
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'error',
        title: 'Incorrect Credentials'
      })
    }
  },
  userNotFound() {
    Vue.swal({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'error',
      title: 'Incorrect Credentials'
    })
  }
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
