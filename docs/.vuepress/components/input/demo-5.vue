<template>
  <div class="demo-wrapper">
    <hai-input v-model="message"></hai-input><hai-button @click="message+=1">点我</hai-button>
    <div class="demo-monitor">
      message: {{message}}
    </div>
  </div>
</template>

<script>
  import Input from "../../../../src/input"
  import Button from "../../../../src/button"
  export default {
    data(){
      return {
        message: '原始数据'
      }
    },
    components: {
      'hai-input': Input,
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
   .demo-monitor{
     margin-left: 4px;
     margin-top: 4px;
     color: #56a7ac;
     font-weight: 500;
   }
</style>