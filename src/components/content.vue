<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HaiContent"
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .content {
    flex-grow: 1;
  }
</style>