<template>
  <div class="popover" ref="popover">
    <transition name="fade">
      <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
        <slot name="content" :close="close"></slot>
      </div>
    </transition>
    <span ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "HaiPopover",
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      },
    },
    data() {
      return {
        visible: false,
        timerId: undefined,
      }
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClickButton)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.onMouseLeaveButton)
      }
    },
    destroyed() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClickButton)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.onMouseLeaveButton)
      }
    },
    methods: {
      onMouseLeaveButton() {
        this.timerId = setTimeout(() => {
          this.close()
        }, 200)
        if (this.$refs.contentWrapper) {
          this.$refs.contentWrapper.addEventListener('mouseenter', this.onMouseEnterContent)
        }
      },
      onMouseEnterContent() {
        this.$refs.contentWrapper.addEventListener('mouseleave', this.onMouseLeaveContent)
        clearTimeout(this.timerId)
      },
      onMouseLeaveContent() {
        if (this.$refs.contentWrapper) {
          this.$refs.contentWrapper.removeEventListener('mouseenter', this.onMouseEnterContent)
          this.$refs.contentWrapper.removeEventListener('mouseleave', this.onMouseLeaveContent)
        }
        this.close()
      },
      onClickButton(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      close() {
        this.visible = false
        if (this.trigger === 'click') {
          document.removeEventListener('click', this.onClickDocument)
        }
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positioningContent()
          if (this.trigger === 'click') {
            document.addEventListener('click', this.onClickDocument)
          }
        })
      },
      positioningContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {top, left, height, width} = triggerWrapper.getBoundingClientRect()
        const {height: contentHeight} = contentWrapper.getBoundingClientRect()
        const positionTable = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + (height - contentHeight) / 2 + window.scrollY,
            left: left + window.scrollX
          },
          right: {
            top: top + (height - contentHeight) / 2 + window.scrollY,
            left: left + window.scrollX + width
          },
        }
        contentWrapper.style.top = positionTable[this.position].top + 'px'
        contentWrapper.style.left = positionTable[this.position].left + 'px'
      },
      onClickDocument(event) {
        const needClose =
          (this.$refs.contentWrapper && !this.$refs.contentWrapper.contains(event.target)) &&
          (!this.$refs.popover.contains(event.target)) &&
          (this.$refs.popover !== event.target)
        if (needClose) {
          this.close()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .popover {
    display: inline-block;vertical-align: top;position: relative;
    .trigger-wrapper {display: inline-block;}
  }
  .content-wrapper {
    color: $color-text;
    position: absolute;
    border: 1px solid $color-primary;
    border-radius: $border-radius-card;
    max-width: 20em;
    padding: .5em 1em;
    word-break: break-all;
    filter: drop-shadow($box-shadow-outer);
    background-color: white;
    &::before, &::after {content: '';display: block;border: 10px solid transparent;width: 0;height: 0;position: absolute;}
    &.position-top {
      transform: translateY(-100%);margin-top: -10px;
      &::before, &::after {left: 10px;border-bottom: none;}
      &::before {top: 100%;border-top-color: $color-primary;}
      &::after {top: calc(100% - 1px);border-top-color: white;}
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {left: 10px;border-top: none;}
      &::before {bottom: 100%;border-bottom-color: $color-primary;}
      &::after {bottom: calc(100% - 1px);border-bottom-color: white;}
    }
    &.position-left {
      transform: translateX(-100%);margin-left: -10px;
      &::before, &::after {top: 50%;border-right: none;transform: translateY(-50%);}
      &::before {left: 100%;border-left-color: $color-primary;}
      &::after {left: calc(100% - 1px);border-left-color: white;}
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {top: 50%;border-left: none;transform: translateY(-50%);}
      &::before {right: 100%;border-right-color: $color-primary;}
      &::after {right: calc(100% - 1px);border-right-color: white;}
    }
  }
</style>