import Vue from 'vue'
// import axios from "axios"

const state = {
  tasks: [],
  userTasks: [],
  isModalTaskVisible: true
};

const mutations = {
  ADD_RECORD(state, payload) {
    state.tasks.unshift(payload)
  },
  SET_RECORDS(state, payload) {
    state.tasks = payload
  },
  SET_USER_TASKS(state, payload) {
    state.userTasks.unshift(payload)
  },
  RESET_USER_TASKS(state) {
    state.userTasks = []
  },
  SET_MODAL_TASK_VISIBLE(state, payload) {
    state.isModalTaskVisible = payload
  }
};

const actions = {
  loadRecords({ commit, state  }) {
    commit('RESET_USER_TASKS')
    try {
      if (state.tasks.length > 0) {        
        state.tasks.forEach(task => {
          if (task.user_id === getters.user.id) commit('SET_USER_TASKS', task)
        })
      }
    } catch (error) {
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'error',
        title: error
      })
    }
  },
  addRecord({ commit }, payload) {
    try {
      commit('ADD_RECORD', payload)
      commit('SET_USER_TASKS', payload)
    } catch (error) {
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'error',
        title: error
      })
    }
  },
  setModalTaskVisible({ commit }, payload) {
    commit('SET_MODAL_TASK_VISIBLE', payload)
  }
};

const getters = {
  tasks: (state) => state.tasks,
  userTasks: (state) => state.userTasks,
  isModalTaskVisible: (state) => state.isModalTaskVisible,
  isAuthenticated: (state, getters, rootState, rootGetters) => rootGetters['Auth/isAuthenticated'],
  user: (state, getters, rootState, rootGetters) => rootGetters['Auth/user']
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
