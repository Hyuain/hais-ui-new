<template>
  <div class="demo-wrapper">
    <hai-button @click="showToast">有关闭按钮的弹出信息</hai-button>
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
      showToast() {
        this.$toast('有关闭按钮的弹出信息',
          {
            autoClose: false,
            closeButton: {
              text: '知道了',
              callback(toast) {
                console.log('用户说他知道了')
                console.log(toast)
              }
            },
            enableHtml: false
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