import { ILoginState } from './login/types'

export interface IRootState {
  name: string
}

export interface IRootLogin {
  login: ILoginState
}

// 交叉类型 既包含又包含
export type IRootStateWithLogin = IRootState & IRootLogin
