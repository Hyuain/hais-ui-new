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

describe('TabsPane', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性.', (done) => {
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
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find({name: 'HaiTabsPane'}).attributes('data-name')).to.equal('anime')
      wrapper.destroy()
      done()
    })
  })
})