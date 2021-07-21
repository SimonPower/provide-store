<template>
  <div class="login-container">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="state.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="state.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserInject } from '@/store/user'

export default defineComponent({
  setup() {
    const router = useRouter()
    const state = reactive({
      username: '',
      password: ''
    })
    const { requestUserInfo, setToken } = useUserInject()

    const onSubmit = async () => {
      // 省略了登陆获取token的过程
      setToken('fake-token')

      // 请求用户数据
      await requestUserInfo()

      router.push('/User')
    }

    return {
      state,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.login-container {
  padding: 0px 10px;
  margin-top: 30px;
}
</style>
