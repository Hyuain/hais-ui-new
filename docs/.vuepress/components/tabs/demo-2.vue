<template>
  <div class="demo-wrapper">
    <hai-tabs :selected.sync="selectedTab">

      <hai-tabs-head>
        <hai-tabs-item name="anime">动漫</hai-tabs-item>
        <hai-tabs-item name="finance">财经</hai-tabs-item>
        <hai-tabs-item name="sports">体育</hai-tabs-item>
      </hai-tabs-head>

      <hai-tabs-body>
        <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
        <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
        <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
      </hai-tabs-body>

    </hai-tabs>

    <div class="demo-monitor">
      selectedTab: {{selectedTab}}
    </div>
  </div>
</template>

<script>
  import Button from '../../../../src/button'
  import Tabs from '../../../../src/tabs'
  import TabsHead from '../../../../src/tabs-head'
  import TabsItem from '../../../../src/tabs-item'
  import TabsBody from '../../../../src/tabs-body'
  import TabsPane from '../../../../src/tabs-pane'
  import Icon from '../../../../src/icon'

  export default {
    data(){
      return {
        selectedTab : 'sports'
      }
    },
    components: {
      'hai-button': Button,
      'hai-tabs': Tabs,
      'hai-tabs-head': TabsHead,
      'hai-tabs-item': TabsItem,
      'hai-tabs-body': TabsBody,
      'hai-tabs-pane': TabsPane,
      'hai-icon': Icon
    }
  }

</script>

<style scoped>
  @media(max-width: 419px){
    .demo-wrapper{
      margin: 0.85rem -1.5rem;
      border-radius: 0
    }
  }
  .demo-wrapper{
    background: rgba(234, 236, 239, 0.5);
    border-radius: 6px;
    padding: 10px;
  }
  .demo-monitor{
    padding: 15px;
    color: #56a7ac;
    font-weight: 500;
  }
</style>