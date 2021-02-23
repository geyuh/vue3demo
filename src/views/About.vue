<template>
  {{ name }}
  {{ count }}
  computed:{{ bigCount }}
  <button @click="handleClick">点我一下</button>
  <input type="text" v-model="count" /><br />
  {{ $store.state.store_name }}
  <!-- <div id="dplayer"></div> -->
</template>
<script>
// import DPlayer from 'dplayer'
import {
  reactive,
  ref,
  onMounted,
  toRefs,
  computed,
  watch,
  getCurrentInstance
} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup() {
    // 第一种路由跳转方式
    const { ctx } = getCurrentInstance()
    // console.log(ctx.$router)
    // 第二种路由跳转
    const router = useRouter()

    // 获取store变量
    const store = useStore()
    console.log(ctx.$store.state.store_name)
    console.log(store.state.store_name)
    // 声明周期函数
    onMounted(() => {
      // console.log('onMOunted')
    })
    // 接收props, context参数
    // console.log(props, context)

    // reactive定义响应式变量
    const state = reactive({
      name: 'hehe'
    })
    // ref定义响应式变量
    const count = ref(1)
    // console.log(count.value) // setup函数内部需要使用.value访问，外部不用

    // 函数
    const handleClick = () => {
      state.name = 'haha'
      let id = 102
      // ctx.$router.push('people')
      router.push(`/people/${id}`)
    }

    // computed计算属性
    const bigCount = computed(() => {
      // count.value + 1
      return count.value + 1
    })
    // console.log(bigCount.value)

    // watch监听 ref
    watch(count, () => {
      console.log(count.value)
    })
    // watch监听 reactive
    watch(
      () => state.name,
      () => {
        console.log(state.name)
      }
    )
    return {
      ...toRefs(state),
      count,
      handleClick,
      bigCount
    }
  },
  // data() {
  //   return {
  //     name: 'test'
  //   }
  // },
  mounted() {
    // new DPlayer({
    //   container: document.getElementById('dplayer'),
    //   video: {
    //     url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
    //     type: 'hls'
    //   }
    // })
    // console.log(dp)
  },
  methods: {}
}
</script>
<style lang="less" scoped></style>
