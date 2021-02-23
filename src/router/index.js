import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../components/Login/index.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   meta: { title: '首页' }
  // },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/auth',
    meta: { title: '用户管理' },
    children: [
      {
        path: 'auth',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/UserManage/auth.vue'
          ),
        name: 'userauth',
        meta: { title: '权限管理' }
      },
      {
        path: 'message',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/UserManage/message.vue'
          ),
        name: 'mesmanage',
        meta: { title: '信息管理' }
      }
    ]
  },
  {
    path: '/department',
    name: 'department',
    component: Home,
    redirect: '/department/people',
    meta: { title: '部门管理' },
    children: [
      {
        path: 'people',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/Department/people.vue'
          ),
        name: 'people',
        meta: { title: '人员管理' }
      },
      {
        path: 'department',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/Department/department.vue'
          ),
        name: 'department',
        meta: { title: '部门管理' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
