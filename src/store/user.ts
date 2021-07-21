import { ref, inject, InjectionKey, Ref, readonly, App } from 'vue'

interface User {
  name: string,
  profile: string
}

interface UserStore {
  token: Ref<string>,
  setToken: (val: string) => void,
  userInfo: Ref<User>,
  setUserInfo: (val: User) => void,
  requestUserInfo: () => void
}

const userSymbol: InjectionKey<UserStore> = Symbol()

export function useUserProvide(provide: App['provide']): void {
  const token = ref('')
  const setToken = (val: string) => {
    token.value = val
  }

  const userInfo = ref<User>({
    name: '',
    profile: '',
  })
  const setUserInfo = (val: User) => {
    userInfo.value = val
  }
  const requestUserInfo = async () => {
    try {
      if (token) {
        // 假装这里异步请求了数据
        const data: User = await new Promise((resolve) => {
          window.setTimeout(() => {
            resolve({
              name: '意想不到的名字',
              profile: 'https://img.yzcdn.cn/vant/cat.jpeg'
            })
          }, 200)
        })

        setUserInfo(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  provide(userSymbol, {
    token: readonly(token),
    setToken,
    userInfo: readonly(userInfo),
    setUserInfo,
    requestUserInfo
  })
}

export function useUserInject(): UserStore {
  const userStore = inject(userSymbol)
  if (!userStore) {
    throw new Error('useUserInject must be used after useUserProvide')
  }
  return userStore
}
