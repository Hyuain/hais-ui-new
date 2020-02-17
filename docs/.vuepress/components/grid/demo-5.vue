<template>
  <div>
    <hai-row id="container">
      <hai-col id="item1" span="24"
             :pad="{span:8}"
             :narrow-pc="{span:6}"
             :pc="{span:4}"
             :wide-pc="{span:2}"
      ></hai-col>
      <hai-col id="item2" span="24"
             :pad="{span:15, offset:1}"
             :narrow-pc="{span:17,offset:1}"
             :pc="{span:18,offset:2}"
             :wide-pc="{span:19, offset:3}"
      ></hai-col>
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
  #item1, #item2 {
    height: 50px;
  }
  #item2 {
    background-color: #cbf1f5;
  }
  #item1 {
    background-color: #71c9ce;
  }
</style>