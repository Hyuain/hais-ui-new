<template>
  <div class="tabs-pane" :class="PaneClass" v-if="active"  :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsPane",
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      PaneClass(){
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
  }
</script>

<style lang="scss" scoped>
  .tabs-pane{
    padding: 1em;
  }
</style>