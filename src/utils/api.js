import { get, get_code, post } from './request'

const login = {
  get_chk_code() {
    return get_code('/api/vcode/chkcode?token=1ec949a15fb709370f')
  },
  login(data) {
    return post('/api/home/user/pwdlogin?token=1ec949a15fb709370f', data)
  }
}

const goods = {
  get_details() {
    return get(
      '/api/home/goods/info?gid=704407997&type=details&token=1ec949a15fb709370f'
    )
  }
}

export { goods, login }
