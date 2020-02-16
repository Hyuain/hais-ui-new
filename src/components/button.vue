<template>
  <button class="button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <hai-icon class="icon" v-if="icon && !loading" :name="icon"></hai-icon>
    <hai-icon class="icon loading" name="loading" v-if="loading"></hai-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import Icon from "./icon.vue";
  export default {
    name: 'HaiButton',
    components: {
      "hai-icon": Icon
    },
    props: {
      icon: {
        type: String,
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        default: "left",
        type: String,
        validator(value) {
          return value === "left" || value === "right";
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $text-color: #2a6c6f;
  $font-size: 14px;
  $button-height: 32px;
  $border-radius: 16px;
  $border-color: #56a7ac;
  $background-color: #ffffff;
  $border-color-hover: #2a6c6f;
  $box-shadow-color:rgba(42, 108, 111, 0.7);
  $button-bg-active: #2a6c6f;
  $button-text-active: #cbf1f5;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .button {
    color: $text-color;
    font-size: $font-size;
    height: $button-height;
    line-height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $background-color;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    transition: all .1s;
    &:hover {
      border-color: $border-color-hover;
      box-shadow: 0 1px 1px $box-shadow-color;
    }
    &:active {
      background-color: $button-bg-active;
      color: $button-text-active;
    }
    &:focus {
      outline: none;
    }
    > .icon {
      order: 1;
      margin-right: 0.3em;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: 0.3em;
      }
      > .content {
        order: 1;
      }
    }
    .loading {
      animation: spin 2s linear infinite;
    }
  }
</style>
