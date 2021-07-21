import { useUserProvide } from './user'
import { App } from 'vue'

export default {
  install: (app: App): void => {
    useUserProvide(app.provide)
  }
}
