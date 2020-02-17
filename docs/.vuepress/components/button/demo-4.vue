<template>
  <div class="demo-wrapper">
    <hai-button-group>
      <hai-button icon="left">上一页</hai-button>
      <hai-button>按钮</hai-button>
      <hai-button icon="right" icon-position="right">下一页</hai-button>
    </hai-button-group>
  </div>
</template>

<script>
  import Button from "../../../../src/button"
  import ButtonGroup from "../../../../src/button-group"
  export default {
    components: {
      'hai-button': Button,
      'hai-button-group': ButtonGroup
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