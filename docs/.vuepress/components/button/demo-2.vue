<template>
  <div class="demo-wrapper">
    <hai-button icon="settings" loading>按钮</hai-button>
    <hai-button icon="settings" :loading="state" @click="state = !state">按钮</hai-button>
  </div>
</template>

<script>

  import Button from "../../../../src/button"

  export default {
    components: {
      'hai-button': Button
    },
    data() {
      return {
        state: false
      }
    }
  }

</script>

<style scoped>
  @media(max-width: 419px){
    .demo-wrapper{
      margin: 0.85rem -1.5rem;
      border-radius: 0
    }
  }
  .demo-wrapper{
    background: rgba(234, 236, 239, 0.5);
    border-radius: 6px;
    padding: 10px;
  }
</style>