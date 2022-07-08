<template>
  <div class="nav-header">
    <i
      :class="isScollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeIScollapse"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'NavHeader',
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
}
</style>
