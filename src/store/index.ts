import { createStore, useStore as useVuexStore, Store } from 'vuex'
import { IRootState, IRootStateWithLogin } from './types'
import login from './login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'liuxin'
    }
  },
  getters: {},
  mutations: {
    login(state) {
      console.log(state.name)
    }
  },
  actions: {},
  modules: {
    login
  }
})

export function reloadKeepStore() {
  store.dispatch('login/loadLocalLogin')
}

// 使用自定义的useStore
export function useStore(): Store<IRootStateWithLogin> {
  return useVuexStore()
}

export default store
