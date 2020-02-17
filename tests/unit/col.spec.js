import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Col from '@/components/col.vue'


describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })

  it('接收 span 属性.', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: '1'
      }
    })
    expect(wrapper.classes('col-1')).to.be.true
    wrapper.destroy()
  })

  it('接收 offset 属性.', () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: '1'
      }
    })
    expect(wrapper.classes('offset-1')).to.be.true
    wrapper.destroy()
  })

  it('接收 pc 属性.', () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: {span:1,offset:2}
      }
    })
    expect(wrapper.classes('col-pc-1')).to.be.true
    expect(wrapper.classes('offset-pc-2')).to.be.true
    wrapper.destroy()
  })

  it('接收 pad 属性.', () => {
    const wrapper = mount(Col, {
      propsData: {
        pad: {span:1,offset:2}
      }
    })
    expect(wrapper.classes('col-pad-1')).to.be.true
    expect(wrapper.classes('offset-pad-2')).to.be.true
    wrapper.destroy()
  })

  it('接收 narrow-pc 属性.', () => {
    const wrapper = mount(Col, {
      propsData: {
        narrowPc: {span:1,offset:2}
      }
    })
    expect(wrapper.classes('col-narrow-pc-1')).to.be.true
    expect(wrapper.classes('offset-narrow-pc-2')).to.be.true
    wrapper.destroy()
  })

  it('接收 wide-pc 属性.', () => {
    const wrapper = mount(Col, {
      propsData: {
        widePc: {span:1,offset:2}
      }
    })
    expect(wrapper.classes('col-wide-pc-1')).to.be.true
    expect(wrapper.classes('offset-wide-pc-2')).to.be.true
    wrapper.destroy()
  })
})