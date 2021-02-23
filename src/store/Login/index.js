const login = {
  state: {
    auth_token: '',
    uid: '',
    nickname: ''
  },
  mutations: {
    SET_TOKEN(state, val) {
      sessionStorage.setItem('token', val.auth_token)
      state.auth_token = val.auth_token
      state.nickname = val.nickname
      state.uid = val.uid
    }
  },
  actions: {},
  getters: {}
}

export default login
