<template>
  <div class="demo-wrapper">
    <hai-popover position="bottom">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <hai-button>从下方弹出</hai-button>
    </hai-popover>

    <hai-popover>
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <hai-button>从上方弹出</hai-button>
    </hai-popover>

    <hai-popover position="left">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <hai-button>从左侧弹出</hai-button>
    </hai-popover>

    <hai-popover position="right">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <hai-button>从右侧弹出</hai-button>
    </hai-popover>
  </div>
</template>

<script>
  import Popover from "../../../../src/popover"
  import Button from "../../../../src/button"

  export default {
    components: {
      'hai-popover': Popover,
      'hai-button': Button
    }
  }
</script>

<style scoped>
  @media (max-width: 419px) {
    .demo-wrapper {
      margin: 0.85rem -1.5rem;
      border-radius: 0
    }
  }
  .demo-wrapper {
    background: rgba(234, 236, 239, 0.5);
    border-radius: 6px;
    padding: 10px;
  }
  .button{
    margin: 2px 0;
  }
</style>