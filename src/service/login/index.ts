import lxRequest from '@/service/index'
import { IAccount, IDataType, ILoginResult } from './type'

// 登录
export const accountLoginRequest = (account: IAccount) => {
  return lxRequest.request<IDataType<ILoginResult>>({
    url: '/login',
    method: 'POST',
    data: account
  })
}

// 获取用户信息
export const getUserInfo = (id: number) => {
  return lxRequest.request<IDataType>({
    url: '/users/' + id,
    method: 'GET'
  })
}

// 获取当前用户菜单
export const getUserMenu = (id: number) => {
  return lxRequest.request<IDataType>({
    url: '/role/' + id + '/menu',
    method: 'GET'
  })
}
