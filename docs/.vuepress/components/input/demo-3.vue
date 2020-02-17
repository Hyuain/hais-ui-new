<template>
  <div class="demo-wrapper">
    <hai-input value="只读" readonly></hai-input>
  </div>
</template>

<script>
  import Input from "../../../../src/input"
  export default {
    components: {
      'hai-input': Input
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