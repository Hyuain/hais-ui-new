<template>
  <div class="wrapper" :class="{'error':error}">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="message-error">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon.vue'

  export default {
    components: {Icon},
    name: 'HaiInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $input-height: 32px;
  $text-color: #2a6c6f;
  $border-radius: 16px;
  $border-color: #56a7ac;
  $border-color-hover: #2a6c6f;
  $box-shadow-color: rgba(42, 108, 111, 0.7);
  $color-disabled: #aaaaaa;
  $box-shadow-color-disabled: rgba(170, 170, 170, 0.7);
  $color-error: #ff6464;
  $box-shadow-color-error: rgba(255, 100, 100, 0.7);
  .wrapper {
    font-size: $font-size;display: inline-flex;align-items: center;
    height: $input-height;
    vertical-align: middle;
    > :not(:last-child) {margin-right: .5em;}
    > input {
      transition: all .2s;
      height: $input-height - 2px;padding: 0 8px;font-size: inherit;color: $text-color;
      border: 1px solid $border-color;border-radius: $border-radius;
      &:hover {border-color: $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 1px $box-shadow-color;outline: none;}
      &[disabled], &[readonly] {border-color: $color-disabled;color: $color-disabled;cursor: not-allowed;}
      &[readonly]:focus {box-shadow: inset 0 1px 1px $box-shadow-color-disabled;}
    }
    &.error {
      > input {
        border-color: $color-error; color: $color-error;
        &:focus {box-shadow: inset 0 1px 1px $box-shadow-color-error;}
      }
    }
    .icon-error {fill: $color-error;}
    .message-error {color: $color-error;}
  }
</style>