<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsBody",
    inject: ['eventBus'],
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .tabs-body{

  }
</style>