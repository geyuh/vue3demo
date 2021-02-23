import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/flexible'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { Form } from 'ant-design-vue'
import './common/reset.less'
// import '../src/utils/hls'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
app.use(Form)
// app.config.globalProperties.$form = Form // 自定义添加
app.mount('#app')

// createApp(App)
//   .use(store)
//   .use(router)
//   .use(Antd)
//   .mount('#app')
