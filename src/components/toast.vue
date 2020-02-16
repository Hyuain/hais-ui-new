<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message" ref="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="message"></div>
      </div>
      <div class="line" v-if="closeButton" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HaiToast",
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 5,
        validator(value) {
          return value === false || typeof value === 'number'
        }
      },
      closeButton: {
        type: Object
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      toastClass() {
        return {[`position-${this.position}`]: true}
      }
    },
    mounted() {
      this.closeButton ? this.updateButtonStyles() : this.updateMessageStyles()
      this.execAutoClose()
    },
    methods: {
      updateMessageStyles() {
        if (document.body.clientWidth <= '576') {
          this.$refs.toast.style.justifyContent = 'center'
        }
      },
      updateButtonStyles() {
        this.$nextTick(() => {
          if (this.position === 'middle' && document.body.clientWidth <= '576') {
            this.$refs.line.style.height = 0
          } else {
            this.$refs.line.style.height =
              this.$refs.toast.getBoundingClientRect().height + 'px'
          }
        })
      },
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$emit('beforeClose')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $toast-border-radius: 12px;
  $toast-bg: rgba(21, 23, 29, 0.85);
  $toast-min-height: 40px;
  $animation-duration: .3s;
  $font-size: 14px;
  $line-color: rgba(102, 102, 102, 0.8);
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1; transform: translateY(0%);}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1; transform: translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @media(max-width: 576px) {
    .wrapper {
      width: 100%;
      .toast {
        border-radius: 6px;
        .line {
          margin-left: auto;
        }
      }
      &.position-top {
        .toast {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
      &.position-bottom {
        .toast {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      &.position-middle {
        width: 60%;
        .toast {
          border-radius: 16px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          .line {
            width: 100%;
            border: none;
            border-bottom: 1px solid $line-color;
          }
          .close {
            padding: 4px;
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    &.position-top {
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }
  .toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    border-radius: $toast-border-radius;
    color: white;
    padding: 0 16px;
    .line {
      height: 100%;
      border-left: 1px solid $line-color;
      margin-left: 16px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .message {
      padding: 8px 0;
    }
  }
</style>