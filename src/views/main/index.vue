<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="Scollapse ? '210px' : '60px'">
        <NavMenu :isShow="Scollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @changeScollapse="changeScollapse" />
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index.vue'
import NavHeader from '@/components/nav-header/index.vue'
export default defineComponent({
  name: 'Main',
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const Scollapse = ref(true)
    const changeScollapse = (val: boolean) => {
      Scollapse.value = val
    }
    return {
      Scollapse,
      changeScollapse
    }
  }
})
</script>
<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .main-content {
    height: 100%;
    .el-aside {
      background-color: #001529;
      color: rgb(183, 189, 195);
      height: 100%;
      transition: all 0.3s;
      overflow: hidden;
    }
    .page {
      height: 100%;
      .page-header {
        color: #333;
        height: 60px;
        display: flex;
        align-items: center;
      }
      .page-content {
        background-color: #f0f2f5;
        color: #333;
        height: calc(100% - 60px);
      }
    }
  }
}
</style>
