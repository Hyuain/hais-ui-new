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
  @import "src/assets/styles/default.scss";
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .button {
    font-size: $font-size;
    color: $color-text;
    height: $height-button;
    line-height: $height-button;
    padding: 0 1em;
    border-radius: $border-radius;
    border: $border;
    background: $color-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    transition: all .1s;
    &:hover {
      color: $color-primary;
      border-color: $color-primary;
      box-shadow: $box-shadow;
    }
    &:active {
      background-color: $color-primary;
      color: $color-bg;
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
