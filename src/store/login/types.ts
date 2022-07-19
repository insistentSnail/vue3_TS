import { RouteRecordRaw } from 'vue-router'
export interface ILoginState {
  token: string
  userInfo: any
  userMenu: any[]
  routes: RouteRecordRaw[]
}
