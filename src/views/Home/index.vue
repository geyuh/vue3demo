<template>
  <div>
    <div class="header_box"></div>
    <div class="body_box">
      <a-layout id="components-layout-demo-side">
        <a-layout-sider
          v-model:collapsed="collapsed"
          collapsible
          :trigger="null"
        >
          <a-menu
            theme="light"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
          >
            <a-sub-menu v-for="item in menu" :key="item.key">
              <template #title>
                <span
                  ><user-outlined /><span>{{ item.title }}</span></span
                >
              </template>
              <a-menu-item
                v-for="childItem in item.children"
                :key="childItem.key"
              >
                <router-link :to="childItem.path">
                  {{ childItem.title }}
                </router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-content style="margin: 0 16px">
            <!-- <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item>User</a-breadcrumb-item>
              <a-breadcrumb-item>Bill</a-breadcrumb-item>
            </a-breadcrumb> -->
            <div
              :style="{
                padding: '24px',
                background: '#fff'
              }"
            >
              <Breadcrumb :menu="menu" />
              <router-view />
            </div>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../../common/Breadcrumb/breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ['1'],
      menu: [
        {
          title: '用户管理',
          key: '1',
          children: [
            {
              title: '权限管理',
              key: '1-1',
              path: '/home/auth'
            },
            {
              title: '信息管理',
              key: '1-2',
              path: '/home/message'
            }
          ]
        },
        {
          title: '部门管理',
          key: '3',
          children: [
            {
              title: '人员管理',
              key: '4',
              path: '/department/people'
            },
            {
              title: '部门管理',
              key: '5',
              path: '/department/department'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.header_box {
  height: 80px;
}
.body_box {
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
