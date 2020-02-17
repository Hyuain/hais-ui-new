<template>
  <div class="tabs" :class="{[`direction-${this.eventBus.direction}`]:true}">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "HaiTabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue({
          data: () => {
            return {
              direction: this.direction
            }
          }
        })
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn(`<hai-tabs> 的子组件应该是 <hai-tabs-head> 和 <hai-tabs-body>，但是你没有写子组件`)
        }
      },
      selectDefaultTab() {
        this.$children.forEach(vm => {
          if (vm.$options.name === 'HaiTabsHead') {
            vm.$children.forEach(child => {
              if (child.$options.name === 'HaiTabsItem' && child.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, child)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren()
      this.selectDefaultTab()
      this.eventBus.$on('update:selected', (name) => {
        this.$emit('update:selected', name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .tabs {
    color: $color-text;
    &.direction-vertical {
      display: flex;
    }
  }

</style>