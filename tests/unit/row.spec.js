import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Row from '@/components/row.vue'
import Col from '@/components/col.vue'

Vue.component('hai-row', Row)
Vue.component('hai-col', Col)

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
    expect(Col).to.exist
  })

  it('接收 gutter 属性.', (done) => {
    const Component = {
      template: `
      <hai-row gutter="20">
        <hai-col span="12"></hai-col>
        <hai-col span="12"></hai-col>
      </hai-row>
      `
    }
    const wrapper = mount(Component)
    setTimeout(() => {
      const row = wrapper.find('.row').element
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = wrapper.findAll('.col')
      expect(getComputedStyle(cols.wrappers[0].element).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols.wrappers[1].element).paddingRight).to.eq('10px')
      wrapper.destroy()
      done()
    })
  })

  it('接收 align 属性.', () => {
    const wrapper = mount(Row, {
      propsData: {
        align: 'center'
      }
    })
    expect(wrapper.classes('align-center')).to.be.true
    wrapper.destroy()
  })
})