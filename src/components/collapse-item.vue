<template>
  <div class="collapse-item">
    <div class="title" @click="onClick" ref="title" :data-title="title" :data-name="name">
      {{title}}
    </div>
    <div class="content" v-if="open" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HaiCollapseItem",
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        open: false
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (names) => {
        this.open = names.indexOf(this.name) >= 0;
      })
    },
    methods: {
      onClick() {
        if (this.open) {
          this.eventBus.$emit('remove:selected', this.name)
        } else {
          this.eventBus.$emit('add:selected', this.name)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $collapse-border-radius: 12px;
  $border-color: #56a7ac;
  .collapse-item {
    > .title {
      border: 1px solid $border-color;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $collapse-border-radius;
        border-top-right-radius: $collapse-border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        margin-bottom: -1px;
        border-bottom-left-radius: $collapse-border-radius;
        border-bottom-right-radius: $collapse-border-radius;
      }
    }
    > .content {
      padding: 8px;
    }
  }
</style>