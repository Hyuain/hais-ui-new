<template>
  <div class="tabs-head" :class="{[`direction-${this.eventBus.direction}`]:true}">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsHead",
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        const {width, height} = vm.$el.getBoundingClientRect()
        const left = vm.$el.offsetLeft
        const top = vm.$el.offsetTop
        if (this.eventBus.direction === 'horizontal') {
          this.$refs.line.style.left = `${left + 1}px`
          this.$refs.line.style.width = `${width - 2}px`
        } else {
          this.$refs.line.style.top = `${top + 1}px`
          this.$refs.line.style.height = `${height - 2}px`
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $text-color-accent: #56a7ac;
  $tab-border-color: rgba(0, 0, 0, .1);
  .tabs-head {
    &.direction-horizontal {
      display: flex;
      height: $tab-height;
      justify-content: flex-start;
      position: relative;
      border-bottom: 1px solid $tab-border-color;
      > .line {
        position: absolute;
        bottom: -1px;
        border-bottom: 2px solid $text-color-accent;
        transition: all .3s;
      }
      > .actions-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        padding: 0 1em;
      }
    }
    &.direction-vertical {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      border-right: 1px solid $tab-border-color;
      > .line {
        position: absolute;
        right: -1px;
        border-right: 2px solid $text-color-accent;
        transition: all .3s;
      }
      > .actions-wrapper {
        margin-top: auto;
        padding: 1em;
      }
    }
  }
</style>