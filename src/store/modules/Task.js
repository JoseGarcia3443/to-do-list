import Vue from 'vue'
// import axios from "axios"

const state = {
  tasks: [],
  userTasks: [],
  userDoneTasks: [],
  isModalTaskVisible: true
};

const mutations = {
  ADD_RECORD(state, payload) {
    state.tasks.push(payload)
  },
  SET_RECORDS(state, payload) {
    state.tasks = payload
  },
  UPDATE_RECORD(state, payload) {
    const idx = state.tasks.findIndex((t) => t.task === payload.task);
    if (idx === -1) return;
    Vue.set(state.tasks, idx, payload);
  },
  DELETE_RECORD(state, payload) {
    const idx = state.tasks.findIndex((t) => t.task === payload.task);
    if (idx === -1) return;
    Vue.delete(state.tasks, idx);
  },
  DELETE_USER_TASK(state, payload) {
    const idx = state.userTasks.findIndex((t) => t.task === payload.task);
    if (idx === -1) return;
    Vue.delete(state.userTasks, idx);
  },
  DELETE_DONE_TASK(state, payload) {
    const idx = state.userDoneTasks.findIndex((t) => t.task === payload.task);
    if (idx === -1) return;
    Vue.delete(state.userDoneTasks, idx);
  },
  SET_USER_TASKS(state, payload) {
    state.userTasks.push(payload)
    const idx = state.userDoneTasks.findIndex(t => t.task === payload.task);
    if (idx === -1) return;
    Vue.delete(state.userDoneTasks, idx);
  },
  SET_DONE_TASKS(state, payload) {
    state.userDoneTasks.push(payload)
    const idx = state.userTasks.findIndex(t => t.task === payload.task);
    if (idx === -1) return;
    Vue.delete(state.userTasks, idx);
  },
  RESET_USER_TASKS(state) {
    state.userTasks = []
  },
  RESET_DONE_TASKS(state) {
    state.userDoneTasks = []
  },
  SET_MODAL_TASK_VISIBLE(state, payload) {
    state.isModalTaskVisible = payload
  }
};

const actions = {
  loadRecords({ commit, state, getters }) {
    commit('RESET_USER_TASKS')
    commit('RESET_DONE_TASKS')
    try {
      if (state.tasks) {
        state.tasks.forEach(task => {
          if (task.user_id === getters.user.id) {
            task.status === 1 ? commit('SET_USER_TASKS', task) : commit('SET_DONE_TASKS', task)
          }
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
      commit('SET_MODAL_TASK_VISIBLE', false)
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Task saved'
      })
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
  deleteRecord({ commit }, payload) {
    try {
      commit('DELETE_RECORD', payload)
      payload.status === 1 ? commit('DELETE_USER_TASK', payload) : commit('DELETE_DONE_TASK', payload)
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Task deleted succesfully'
      })
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
  doneTask({ commit }, payload) {
    try {
      commit('SET_DONE_TASKS', payload)
      commit('UPDATE_RECORD', payload)
      Vue.swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Congrats you do done a task!'
      })
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
  undoDoneTask({ commit }, payload) {
    try {
      commit('SET_USER_TASKS', payload)
      commit('UPDATE_RECORD', payload)
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
  userDoneTasks: (state) => state.userDoneTasks,
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
