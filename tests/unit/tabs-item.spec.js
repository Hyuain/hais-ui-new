import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import sinon from 'sinon'
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

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性.', () => {
    const Component = {
      template: `
      <hai-tabs selected="anime">
        <hai-tabs-head>
          <hai-tabs-item name="anime"> 动漫 </hai-tabs-item>
        </hai-tabs-head>
        <hai-tabs-body>
          <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
        </hai-tabs-body>
      </hai-tabs>
      `
    }
    const wrapper = mount(Component)
    expect(wrapper.find({name: 'HaiTabsItem'}).attributes('data-name')).to.equal('anime')
    wrapper.destroy()
  })

  it('接收 disabled 属性.', () => {
    const Component = {
      template: `
      <hai-tabs selected="anime">
        <hai-tabs-head>
          <hai-tabs-item name="anime" disabled> 动漫 </hai-tabs-item>
          <hai-tabs-item name="finance"> 经济 </hai-tabs-item>
        </hai-tabs-head>
        <hai-tabs-body>
          <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
          <hai-tabs-pane name="finance"> 经济相关资讯 </hai-tabs-pane>
        </hai-tabs-body>
      </hai-tabs>
      `
    }
    const wrapper = mount(Component)
    const callback = sinon.fake()
    const tabsItemWrapperArray = wrapper.findAll({name: 'HaiTabsItem'})
    tabsItemWrapperArray.wrappers.forEach(wrapper => {
      if(wrapper.vm.name === 'anime') {
        expect(wrapper.classes('disabled')).to.be.true
        wrapper.vm.$on('click', callback)
        wrapper.trigger('click')
        expect(callback.called).to.be.false
      } else if(wrapper.vm.name === 'finance') {
        expect(wrapper.classes('disabled')).to.be.false
        wrapper.vm.$on('click', callback)
        wrapper.trigger('click')
        expect(callback.called).to.be.true
      }
    })
    wrapper.destroy()
  })
})