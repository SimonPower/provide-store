<template>
  <div>
    <layout v-if="isShowLayout" />
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import { useUserInject } from '@/store/user'

export default defineComponent({
  components: {
    Layout: defineAsyncComponent(() => import('@/views/Layout.vue'))
  },
  setup() {
    const { token } = useUserInject()

    const isShowLayout = computed(() => !!token.value)

    return { isShowLayout }
  }
})
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
</style>
