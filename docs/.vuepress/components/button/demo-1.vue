<template>
  <div class="demo-wrapper">
    <hai-button class="button">默认</hai-button>
    <hai-button icon="settings" class="button">设置</hai-button>
    <hai-button icon="likes" class="button">点赞</hai-button>
    <hai-button icon="download" class="button">下载</hai-button>
    <hai-button icon="left" class="button">上一页</hai-button>
    <hai-button icon="right" class="button">下一页</hai-button>
    <hai-button icon="down" class="button">展开</hai-button>
  </div>
</template>

<script>

  import Button from "../../../../src/button"

  export default {
    components: {
      'hai-button': Button
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
  .button{
    margin: 2px 0;
  }
</style>