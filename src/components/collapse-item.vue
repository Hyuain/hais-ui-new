<template>
  <div class="collapse-item">
    <div class="title" @click="onClick" ref="title" :data-title="title" :data-name="name">
      <hai-icon name="right" :class="{'icon': true,'icon-down': open}"/>
      {{title}}
    </div>
    <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
    >
      <div class="content" v-if="open" ref="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from "./icon.vue";

  export default {
    name: "HaiCollapseItem",
    inject: ['eventBus'],
    components: {
      "hai-icon": Icon
    },
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
      },
      enter(el) {
        el.style.transition = 'height .3s ease-in-out'
        el.style.overflow = 'hidden'
        el.style.height = 'auto'
        let endHeight = getComputedStyle(el).height
        el.style.height = '0px'
        el.offsetHeight
        el.style.height = endHeight
      },
      afterEnter(el) {
        el.style.height = null
      },
      leave(el) {
        el.style.height = getComputedStyle(el).height
        el.offsetHeight
        el.style.height = '0px'
      },
      afterLeave(el) {
        el.style.height = null
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .collapse-item {
    .icon {
      margin-right: 4px;
      transition: transform .3s;
    }
    .icon-down {
      transform: rotate(90deg);
    }
    > .title {
      border: $border;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      height: $height-title;
      line-height: $height-title;
      display: flex;
      align-items: center;
      padding: 0 8px;
      cursor: pointer;
      background: $color-bg-tab;
    }
    &:first-child {
      > .title {
        border-radius: $border-radius-card $border-radius-card 0 0;
      }
    }
    &:last-child {
      > .title:last-child {
        margin-bottom: -1px;
        border-radius: 0 0 $border-radius-card $border-radius-card;
      }
    }
    > .content {
      border-radius: 0 0 $border-radius-card $border-radius-card;
    }
  }
</style>