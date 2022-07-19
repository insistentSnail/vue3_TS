<template>
  <el-dropdown>
    <div class="avatarAndName">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      {{ name }}
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="el-icon-circle-close"
          >退出登录</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-warning-outline" divided
          >个人信息</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  name: '',
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped lang="scss">
.avatarAndName {
  display: flex;
  align-items: center;
  .el-avatar {
    margin-right: 10px;
  }
}
</style>
