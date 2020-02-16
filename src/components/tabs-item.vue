<template>
  <div class="tabs-item" @click="onClick" :class="TabClass" :data-name="name">
    <span><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsItem",
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      TabClass() {
        return {
          active: this.active,
          disabled: this.disabled,
          [`direction-${this.eventBus.direction}`]: true
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return
        }
        if (this.eventBus) {
          this.eventBus.$emit('update:selected', this.name, this)
        }
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $color-disabled: #aaaaaa;
  $text-color-accent: #56a7ac;
  .tabs-item {
    cursor: pointer;
    &.direction-horizontal {
      flex-shrink: 0;
      padding: 0 1.5em;
      display: flex;
      align-items: center;
      height: 100%;
      &.active {
        color: $text-color-accent;
        font-weight: bold;
      }
      &.disabled {
        color: $color-disabled;
        cursor: not-allowed;
      }
    }
    &.direction-vertical {
      padding: .5em 1em;
      &.active {
        color: $text-color-accent;
        font-weight: bold;
      }
      &.disabled {
        color: $color-disabled;
        cursor: not-allowed;
      }
    }
  }

</style>