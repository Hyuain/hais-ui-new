import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Collapse from '@/components/collapse.vue'
import CollapseItem from '@/components/collapse-item.vue'

Vue.component('hai-collapse', Collapse)
Vue.component('hai-collapse-item', CollapseItem)

describe('Collapse', () => {

  it('存在.', () => {
    expect(Collapse).to.be.ok
  })

  it('可以设置 alone.', (done) => {
    const Component = {
      template: `
      <hai-collapse alone>
        <hai-collapse-item title="标题1" name="1">内容1</hai-collapse-item>
        <hai-collapse-item title="标题2" name="2">内容2</hai-collapse-item>
        <hai-collapse-item title="标题3" name="3">内容3</hai-collapse-item>
      </hai-collapse>      
      `
    }
    const wrapper = mount(Component)
    const collapseEl = wrapper.vm.$children[0]
    const collapseItems = collapseEl.$children
    collapseItems[0].$refs.title.click()
    wrapper.vm.$nextTick(() => {
      expect(collapseItems[0].$refs.content).to.exist
      expect(collapseItems[1].$refs.content).to.not.exist
      expect(collapseItems[2].$refs.content).to.not.exist
      collapseItems[1].$refs.title.click()
      wrapper.vm.$nextTick(() => {
        expect(collapseItems[0].$refs.content).to.not.exist
        expect(collapseItems[1].$refs.content).to.exist
        expect(collapseItems[2].$refs.content).to.not.exist
        wrapper.destroy()
        done()
      })
    })
  })

  it('可以设置 selected.', (done) => {
    const Component = {
      template: `
      <hai-collapse :selected="['1', '2']">
        <hai-collapse-item title="标题1" name="1">内容1</hai-collapse-item>
        <hai-collapse-item title="标题2" name="2">内容2</hai-collapse-item>
        <hai-collapse-item title="标题3" name="3">内容3</hai-collapse-item>
      </hai-collapse>      
      `
    }
    const wrapper = mount(Component)
    const collapseEl = wrapper.vm.$children[0]
    const collapseItems = collapseEl.$children
    wrapper.vm.$nextTick(() => {
      expect(collapseItems[0].$refs.content).to.exist
      expect(collapseItems[1].$refs.content).to.exist
      expect(collapseItems[2].$refs.content).to.not.exist
      wrapper.destroy()
      done()
    })
  })
})