import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Collapse from '@/components/collapse.vue'
import CollapseItem from '@/components/collapse-item.vue'

Vue.component('hai-collapse', Collapse)
Vue.component('hai-collapse-item', CollapseItem)


describe('CollapseItem', () => {

  it('存在.', () => {
    expect(CollapseItem).to.be.ok
  })

  it('可以设置 name 和 title.', (done) => {
    const Component = {
      template: `
      <hai-collapse>
        <hai-collapse-item title="标题1" name="1">内容1</hai-collapse-item>
      </hai-collapse>
      `
    }
    const wrapper = mount(Component)
    const collapseEl = wrapper.vm.$children[0]
    const collapseItem = collapseEl.$children[0]
    expect(collapseItem.$refs.title.getAttribute('data-name')).to.eq('1')
    expect(collapseItem.$refs.title.getAttribute('data-title')).to.eq('标题1')
    wrapper.destroy()
    done()
  })
})