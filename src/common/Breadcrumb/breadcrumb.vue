<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <router-link to="/home">首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in breadList" :key="index"
      ><router-link :to="item.path">{{ item.meta.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      breadList: [] // 路由集合
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  mounted() {},
  methods: {
    isHome(route) {
      return route.name === 'home'
    },
    getBreadcrumb() {
      let matched = this.$route.matched
      //如果不是首页
      // if (!this.isHome(matched[0])) {
      //   matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
      // }
      this.breadList = matched
    }
  }
}
</script>

<style lang="less" scoped></style>
