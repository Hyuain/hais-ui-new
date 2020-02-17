import {expect} from 'chai'
import sinon from 'sinon'
import {mount} from '@vue/test-utils'
import Button from '@/components/button.vue'

describe('Button', () => {

  it('存在.', () => {
    expect(Button).to.be.ok
  })

  it('可以设置 icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    const useWrapper = wrapper.find('use')
    expect(useWrapper.attributes('href')).to.equal('#settings')
    wrapper.destroy()
  })

  it('可以设置 loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    const useWrapperArray = wrapper.findAll('use')
    expect(useWrapperArray.length).to.equal(1)
    expect(useWrapperArray.wrappers[0].attributes('href')).to.equal('#loading')
    wrapper.destroy()
  })

  it('Button 默认为 icon-left.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    expect(wrapper.classes('icon-left')).to.be.true
    expect(wrapper.classes('icon-right')).to.be.false
    wrapper.destroy()
  })

  it('通过 iconPosition 可以设置 Button 为 icon-right.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    expect(wrapper.classes('icon-right')).to.be.true
    expect(wrapper.classes('icon-left')).to.be.false
    wrapper.destroy()
  })

  it('点击 Button 触发 click 事件.', () => {
    const callback = sinon.fake();
    const wrapper = mount(Button)
    wrapper.vm.$on('click', callback)
    wrapper.trigger('click')
    expect(callback.called).to.be.true
    wrapper.destroy()
  })
})