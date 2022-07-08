<template>
  <!-- vue3页⾯ -->
  <div class="accountLogin">
    <el-form :model="form" label-width="80px" :rules="rules" ref="ruleFormRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" @keyup.enter="innerLogin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          show-password
          @keyup.enter="innerLogin"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import cache from '@/utils/cache'
import { rules } from '../config/accountLogin'
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'AccountLogin',
  emits: ['innerLogin'],
  setup(props, { emit }) {
    const store = useStore()
    const form = reactive({
      name: cache.getCache('user')?.name ?? '',
      password: cache.getCache('user')?.password ?? ''
    })
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    const login = (isKeepPassword: boolean) => {
      console.log('点击登录按钮')
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          // 验证通过
          // 1、判断是否记住密码
          if (isKeepPassword) {
            cache.setCache('user', form)
          } else {
            cache.removeCache('user')
          }
          // 2、登录逻辑
          store.dispatch('login/accountLoginAction', { ...form })
        }
      })
    }
    const innerLogin = () => {
      emit('innerLogin')
    }
    return {
      form,
      rules,
      ruleFormRef,
      login,
      innerLogin
    }
  }
})
</script>

<style scoped lang="scss">
.accountLogin {
}
</style>
