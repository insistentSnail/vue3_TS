import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { accountLoginRequest, getUserInfo, getUserMenu } from '@/service/login'
import { IAccount } from '@/service/login/type'
import cache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/mapMenus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: [],
      routes: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
      cache.setCache('token', token)
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
      cache.setCache('userInfo', userInfo)
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu
      cache.setCache('userMenu', userMenu)
      // 获取的菜单转换成路由数组
      state.routes = mapMenusToRoutes(userMenu)
      // 注册动态路由
      state.routes.forEach((ele) => router.addRoute('Main', ele))
      console.log(mapMenusToRoutes(userMenu), 33)
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1、登录
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      // 2、获取用户信息
      const userInfoResult = await getUserInfo(id)
      commit('changeUserInfo', userInfoResult.data)
      // 3、获取菜单
      const menuResult = await getUserMenu(userInfoResult.data.role.id)
      commit('changeUserMenu', menuResult.data)
      // 4、登录成功跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = cache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = cache.getCache('userMenu')
      if (userMenu) {
        commit('changeUserMenu', userMenu)
      }
    }
  }
}

export default loginModule
