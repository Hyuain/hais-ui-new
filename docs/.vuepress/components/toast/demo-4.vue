<template>
  <div class="demo-wrapper">
    <hai-button @click="showToast1">从顶部弹出</hai-button>
    <hai-button @click="showToast2">在中间弹出</hai-button>
    <hai-button @click="showToast3">从下方弹出</hai-button>
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
        this.showToast('top')
      },
      showToast2() {
        this.showToast('middle')
      },
      showToast3() {
        this.showToast('bottom')
      },
      showToast(position) {
        this.$toast('这是一条弹出信息',
          {
            autoClose: false,
            position,
            closeButton: {
              text: '知道了',
            }
          }
        )
      }
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
</style>