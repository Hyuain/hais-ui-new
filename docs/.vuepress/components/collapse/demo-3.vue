<template>
  <div class="demo-wrapper">
    <hai-collapse :selected="['name3']" alone>
      <hai-collapse-item title="标题1" name="name1">
        <div class="content">这是第1段内容</div>
      </hai-collapse-item>
      <hai-collapse-item title="标题2" name="name2">
        <div class="content">这是第2段内容</div>
      </hai-collapse-item>
      <hai-collapse-item title="标题3" name="name3">
        <div class="content">这是第3段内容</div>
      </hai-collapse-item>
    </hai-collapse>
  </div>
</template>

<script>

  import Collapse from "../../../../src/components/collapse"
  import CollapseItem from "../../../../src/components/collapse-item"

  export default {
    data(){
      return{
        selectedItem: ['name2']
      }
    },
    components: {
      'hai-collapse': Collapse,
      'hai-collapse-item': CollapseItem
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
  .content {
    padding: 16px;
    background: #fff;
  }
</style>