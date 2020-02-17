<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  const validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (['span', 'offset'].indexOf(key) < 0) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: "HaiCol",
    data() {
      return {
        gutter: 0,
      }
    },
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      pad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator}
    },
    computed: {
      colClass() {
        let {span, offset, pad, narrowPc, pc, widePc} = this
        let createClass = this.createClass
        return [
          ...createClass({span, offset}),
          ...createClass(pad, 'pad-'),
          ...createClass(narrowPc, 'narrow-pc-'),
          ...createClass(pc, 'pc-'),
          ...createClass(widePc, 'wide-pc-')
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      }
    },
    methods: {
      createClass(propsObj, device = '') {
        if (!propsObj) {
          return []
        }
        let classArray = []
        if (propsObj.span) {
          classArray.push(`col-${device}${propsObj.span}`)
        }
        if (propsObj.offset) {
          classArray.push(`offset-${device}${propsObj.offset}`)
        }
        return classArray
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/default.scss";
  .col {
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      @for $n from 1 through 24 {
        &.col-pad-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-pad-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) {
      @for $n from 1 through 24 {
        &.col-narrow-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-narrow-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      @for $n from 1 through 24 {
        &.col-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      @for $n from 1 through 24 {
        &.col-wide-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-wide-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }

</style>