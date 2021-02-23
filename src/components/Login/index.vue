<template>
  <div class="login">
    <div class="login_box">
      <div class="form_box">
        <a-form
          ref="form"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-item ref="username" label="用户名" name="username">
            <a-input v-model:value="form.username" />
          </a-form-item>
          <a-form-item ref="password" label="密码" name="password">
            <a-input v-model:value="form.password" />
          </a-form-item>
          <a-form-item ref="chkcode" label="验证码" name="chkcode">
            <a-input v-model:value="form.chkcode" /><img
              :src="code"
              alt=""
              style="width:40px;height:30px"
              @click="get_code"
            />
          </a-form-item>
          <a-form-item
            style="margin-top:20px"
            :wrapper-col="{ span: 14, offset: 8 }"
          >
            <a-button type="primary" @click="onSubmit">
              登录
            </a-button>
            <a-button style="margin-left: 10px;" @click="resetForm">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { initRules, initForm } from './index'
import { login, goods } from '../../utils/api'
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
      other: '',
      form: initForm(),
      rules: initRules(),
      code: ''
    }
  },
  created() {
    this.get_code()
    goods.get_details()
  },
  methods: {
    // 获取验证码
    get_code() {
      axios
        .get(
          'http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f',
          { responseType: 'arraybuffer' }
        )
        .then(res => {
          this.code =
            'data:image/png;base64,' +
            btoa(
              new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
              )
            )
        })
    },
    // 登录
    onSubmit() {
      this.$refs.form
        .validate()
        .then(() => {
          let fromData = new FormData()
          fromData.append('cellphone', this.form.username)
          fromData.append('password', this.form.password)
          login.login(fromData).then(res => {
            this.$store.commit('SET_TOKEN', res)
            this.$router.push('/home')
          })
          if (this.form.username === 'admin' && this.form.password === '1') {
            this.$router.push('/home')
          }
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    resetForm() {}
  }
}
</script>

<style lang="less" scoped>
.login {
  background: url(../../assets/login/loginBG.png);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // min-width: 1000px;
  zoom: 1;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  .login_box {
    background: rgb(214, 211, 211);
    opacity: 0.7;
    position: absolute;
    width: 800px;
    height: 600px;
    left: calc(50% - 400px);
    top: calc(50% - 300px);
    border-radius: 3px;
    .form_box {
      width: 600px;
      height: 400px;
      text-align: center;
      position: absolute;
      left: calc(50% - 320px);
      top: calc(50% - 120px);
    }
  }
}
</style>
