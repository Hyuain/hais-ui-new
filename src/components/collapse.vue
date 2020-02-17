<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "HaiCollapse",
    props: {
      alone: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        eventBus: new Vue({}),
        selectedCopy: []
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.selectedCopy = JSON.parse(JSON.stringify(this.selected))
      this.eventBus.$emit('update:selected', this.selectedCopy)
      this.eventBus.$on('add:selected', (name) => {
        if (this.alone) {
          this.selectedCopy = [name]
        } else {
          this.selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', this.selectedCopy)
        this.$emit('update:selected', this.selectedCopy)
      })
      this.eventBus.$on('remove:selected', (name) => {
        const index = this.selectedCopy.indexOf(name)
        this.selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', this.selectedCopy)
        this.$emit('update:selected', this.selectedCopy)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .collapse {
    color: $color-text;
    border: $border;
    border-radius: $border-radius-card;
  }
</style>