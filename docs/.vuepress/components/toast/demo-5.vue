<template>
  <div class="demo-wrapper">
    <hai-button @click="showToast1">不使用 HTML</hai-button>
    <hai-button @click="showToast2">使用 HTML</hai-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../../src/button'
  import plugin from '../../../../src/plugin'
  Vue.use(plugin)
  export default {
    components: {
      'hai-button': Button
    },
    methods: {
      showToast1() {
        this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>')
      },
      showToast2() {
        this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
          enableHtml: true
        })
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