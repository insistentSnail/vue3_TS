<template>
  <!-- vue3页⾯ -->
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <i class="el-icon-user-solid"></i>
            账号登录
          </span>
        </template>
        <accountLogin ref="loginAccount" @innerLogin="login" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <i class="el-icon-mobile-phone"></i>
            手机登录
          </span>
        </template>
        <phoneLogin />
      </el-tab-pane>
    </el-tabs>
    <div class="tips">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <span>忘记密码</span>
    </div>
    <el-button class="btn" type="primary" @click="login">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import accountLogin from '@/views/login/cpns/accountLogin.vue'
import phoneLogin from '@/views/login/cpns/phoneLogin.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'LoginPanel',
  components: {
    accountLogin,
    phoneLogin
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true)
    const loginAccount = ref<InstanceType<typeof accountLogin>>() // 获取组件的类型
    const currentTab = ref('account')

    // 定义方法
    const login = () => {
      if (currentTab.value === 'account') {
        loginAccount.value?.login(isKeepPassword.value)
      }
    }

    return {
      isKeepPassword,
      loginAccount,
      currentTab,
      login
    }
  }
})
</script>

<style scoped lang="scss">
.loginPanel {
  .title {
    text-align: center;
  }
  width: 400px;
  margin: 300px auto;
  .tips {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 14px;
      color: #606266;
    }
  }
  .btn {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
