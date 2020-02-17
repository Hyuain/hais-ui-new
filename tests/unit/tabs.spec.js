import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Tabs from '@/components/tabs'
import TabsHead from '@/components/tabs-head'
import TabsBody from '@/components/tabs-body'
import TabsItem from '@/components/tabs-item'
import TabsPane from '@/components/tabs-pane'

Vue.component('hai-tabs', Tabs)
Vue.component('hai-tabs-head', TabsHead)
Vue.component('hai-tabs-body', TabsBody)
Vue.component('hai-tabs-item', TabsItem)
Vue.component('hai-tabs-pane', TabsPane)

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性.', (done) => {
    const Component = {
      template: `
      <hai-tabs selected="finance">
        <hai-tabs-head>
          <hai-tabs-item name="anime"> 动漫 </hai-tabs-item>
          <hai-tabs-item name="finance"> 财经 </hai-tabs-item>
          <hai-tabs-item name="sports"> 体育 </hai-tabs-item>
        </hai-tabs-head>
        <hai-tabs-body>
          <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
          <hai-tabs-pane name="finance"> 财经相关资讯 </hai-tabs-pane>
          <hai-tabs-pane name="sports"> 体育相关资讯 </hai-tabs-pane>
        </hai-tabs-body>
      </hai-tabs>
      `
    }
    const wrapper = mount(Component)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.tabs-item[data-name="finance"]').classes('active')).to.be.true
      wrapper.destroy()
      done()
    })
  })

  it('接收 direction 属性.', () => {
    const Component = {
      template: `
      <hai-tabs selected="finance" direction="vertical">
        <hai-tabs-head>
          <hai-tabs-item name="anime"> 动漫 </hai-tabs-item>
          <hai-tabs-item name="finance"> 财经 </hai-tabs-item>
          <hai-tabs-item name="sports"> 体育 </hai-tabs-item>
        </hai-tabs-head>
        <hai-tabs-body>
          <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
          <hai-tabs-pane name="finance"> 财经相关资讯 </hai-tabs-pane>
          <hai-tabs-pane name="sports"> 体育相关资讯 </hai-tabs-pane>
        </hai-tabs-body>
      </hai-tabs>
      `
    }
    const wrapper = mount(Component)
    expect(wrapper.classes('direction-vertical')).to.be.true
    expect(wrapper.find({name: 'HaiTabsHead'}).classes('direction-vertical')).to.be.true
    expect(wrapper.find({name: 'HaiTabsItem'}).classes('direction-vertical')).to.be.true
    wrapper.destroy()
  })

})