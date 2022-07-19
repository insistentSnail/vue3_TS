<template>
  <div class="notfound">
    <h1>Not Found</h1>
    <h2>未找到该页面</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.notfound {
  text-align: center;
  overflow: hidden;
  h1 {
    margin: 100px auto 20px;
  }
}
</style>
