<template>
  <svg class="hai-icon" aria-hidden="true">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script>
  let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
  try {
    importAll(require.context('@/assets/icons', true, /\.svg$/))
  } catch (error) {
    console.log(error)
  }
  export default {
    name: 'HaiIcon',
    props: ['name']
  };
</script>
<style lang="scss" scoped>
  .hai-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
  }
</style>