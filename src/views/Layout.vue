<template>
  <div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item name="find" icon="search" to="/find"
        >发现</van-tabbar-item
      >
      <van-tabbar-item name="user" icon="user-o" to="/user">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const active = ref('user')

    return { active }
  }
})
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
</style>
