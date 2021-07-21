<template>
  <div class="user-container">
    <header>
      <van-image
        class="profile"
        round
        width="50px"
        height="50px"
        :src="userInfo.profile"
      />
      <span class="name">{{ userInfo.name }}</span>
    </header>
    <section class="cell-list">
      <van-cell title="最近阅读记录" icon="browsing-history" is-link />
      <van-cell title="喜欢文章" icon="like" is-link />
    </section>
    <section class="log-out">
      <span @click="onLogOut">切换账户</span>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useUserInject } from '@/store/user'

export default defineComponent({
  setup() {
    const router = useRouter()
    const { userInfo, setToken } = useUserInject()

    const onLogOut = () => {
      setToken('')
      router.push('/login')
    }
    return { onLogOut, userInfo }
  }
})
</script>

<style lang="scss" scoped>
.user-container {
  header {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100px;
    background: #fff;
    .profile {
      margin-left: 10px;
    }
    .name {
      margin-left: 10px;
    }
  }
  .cell-list {
    margin-top: 10px;
    // height: auto;
  }
  .log-out {
    text-align: center;
    color: #888;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
