<template>
  <div>auth</div>
</template>

<script>
import { reactive } from 'vue'
import { goods } from '../../utils/api'
export default {
  setup() {
    const state = reactive({
      data: ''
    })
    const get_list = function() {
      goods.get_details().then(res => {
        state.data = res
        console.log(state.data)
      })
    }
    get_list()
  }
}
</script>
<style lang="less" scoped></style>
