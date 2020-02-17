<template>
  <transition name="slide">
    <div class="sider">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "HaiSider",
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
</style>