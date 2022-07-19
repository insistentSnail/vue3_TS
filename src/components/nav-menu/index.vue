<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <span v-if="isShow" class="title">Vue3+TS</span>
    </div>
    <!-- 菜单 -->
    <el-menu
      mode="vertical"
      :collapse="!isShow"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#0C2135"
      text-color="#B7BDC3"
      active-text-color="#fff"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- type等于1表示有二级菜单 -->
        <template v-if="item.type === 1">
          <el-submenu :index="String(item.id)">
            <template v-slot:title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="String(subitem.id)"
                @click="handleRouter(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="String(item.id)">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'NavMenu',
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenu)
    const router = useRouter()
    const handleRouter = (item: any) => {
      router.push({
        path: item.url ?? '/notFound'
      })
    }
    return {
      userMenus,
      handleRouter
    }
  }
})
</script>
<style lang="scss">
.el-popper {
  .el-menu-item.is-active {
    color: #0a60bd !important;
  }
}
</style>
<style scoped lang="scss">
.nav-menu {
  .logo {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    img {
      width: 30px;
    }
  }
  .el-menu {
    border-right: none;
    .el-menu-item.is-active {
      background-color: #0a60bd !important;
    }
    ::v-deep .el-submenu__title {
      background-color: #001529 !important;
    }
  }
}
</style>
