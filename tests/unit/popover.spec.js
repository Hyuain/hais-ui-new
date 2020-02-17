import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Popover from '@/components/popover.vue'

Vue.component('hai-popover', Popover)

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  it('可以设置 position.', (done) => {
    const Component = {
      template: `
      <hai-popover position="bottom" ref="popover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </hai-popover>   
      `
    }
    const wrapper = mount(Component)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      const {contentWrapper} = wrapper.vm.$refs.popover.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  it('可以设置 trigger.', (done) => {
    const Component = {
      template: `
      <hai-popover trigger="hover" ref="popover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </hai-popover>
      `
    }
    const wrapper = mount(Component)
    wrapper.trigger('mouseenter')
    wrapper.vm.$nextTick(() => {
      const {contentWrapper} = wrapper.vm.$refs.popover.$refs
      expect(contentWrapper).to.exist
      done()
    })
  })
})