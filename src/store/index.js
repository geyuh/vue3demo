import { createStore } from 'vuex'
import login_module from './Login'

export default createStore({
  modules: {
    login_module
  },
  state: {
    store_name: 'test'
  },
  mutations: {},
  actions: {}
})
