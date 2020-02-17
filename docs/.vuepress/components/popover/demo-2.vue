<template>
  <div class="demo-wrapper">
    <hai-popover position="bottom">
      <template v-slot:content="{close}">
        <div>这是气泡卡片的内容</div>
        <div class="button-wrapper">
          <hai-button @click="close" class="button">点击关闭</hai-button>
        </div>
      </template>
      <hai-button>手动关闭标签示例</hai-button>
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

<style lang="scss" scoped>
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    > .button {
      margin-top: 10px;
    }
  }
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

</style>