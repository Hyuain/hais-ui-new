<template>
  <div>
    <hai-row id="container" auto>
      <hai-col id="item1"></hai-col>
      <hai-col id="item2"></hai-col>
      <hai-col id="item3"></hai-col>
      <hai-col id="item4"></hai-col>
      <hai-col id="item5"></hai-col>
    </hai-row>
  </div>
</template>

<script>
  import Row from "../../../../src/row"
  import Col from "../../../../src/col"
  export default {
    components: {
      'hai-row': Row,
      'hai-col': Col
    }
  }
</script>

<style lang="scss" scoped>
  #item1, #item2, #item3, #item4, #item5{
    height: 50px;
    width: 100%;
  }
  #item2, #item4 {
    background-color: #cbf1f5;
  }
  #item1, #item3, #item5{
    background-color: #71c9ce;
  }
</style>