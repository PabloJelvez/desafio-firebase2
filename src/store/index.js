import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    AUTH_USER(state, user){
      state.user = user;
    },
    CLEAR_USER(state){
      state.user = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
