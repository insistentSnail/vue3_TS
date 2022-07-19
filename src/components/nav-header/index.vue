<template>
  <div class="nav-header">
    <i
      :class="isScollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeIScollapse"
    ></i>
    <div class="userInfo">
      <div class="nav">面包屑</div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import UserInfo from '@/components/nav-header/userInfo.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'NavHeader',
  components: {
    UserInfo
  },
  emits: ['changeScollapse'],
  setup(props, { emit }) {
    const isScollapse = ref(true)
    const changeIScollapse = () => {
      isScollapse.value = !isScollapse.value
      emit('changeScollapse', isScollapse.value)
    }
    return {
      isScollapse,
      changeIScollapse
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  font-size: 30px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    .nav {
      margin-left: 10px;
      font-size: 20px;
    }
  }
}
</style>
