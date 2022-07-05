<template>
  <!-- vue3页⾯ -->
  <div class="loginPanel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <i class="el-icon-user-solid"></i>
            账号登录
          </span>
        </template>
        <accountLogin />
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span>
            <i class="el-icon-mobile-phone"></i>
            手机登录
          </span>
        </template>
        <phoneLogin />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import accountLogin from '@/views/login/cpns/accountLogin.vue'
import phoneLogin from '@/views/login/cpns/phoneLogin.vue'
import { defineComponent, ref } from 'vue'
import PhoneLogin from './phoneLogin.vue'
export default defineComponent({
  name: 'LoginPanel',
  components: {
    accountLogin,
    phoneLogin
  },
  setup() {
    return {}
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
}
</style>
