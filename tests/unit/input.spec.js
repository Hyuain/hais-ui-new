import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import sinon from 'sinon'
import Input from '@/components/input.vue'


describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props', () => {

    it('接收 value.', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: '11234'
        }
      })
      const inputWrapper = wrapper.find('input')
      expect(inputWrapper.element.value).to.equal('11234')
      wrapper.destroy()
    })

    it('接收 disabled.', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true
        }
      })
      const inputWrapper = wrapper.find('input')
      expect(inputWrapper.element.disabled).to.equal(true)
      wrapper.destroy()
    })

    it('接收 readonly.', () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true
        }
      })
      const inputWrapper = wrapper.find('input')
      expect(inputWrapper.element.readOnly).to.equal(true)
      wrapper.destroy()
    })

    it('接收 error.', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '错了哦'
        }
      })
      const useWrapper = wrapper.find('use')
      expect(useWrapper.attributes('href')).to.equal('#error')
      const messageWrapper = wrapper.find('.message-error')
      expect(messageWrapper.text()).to.equal('错了哦')
      wrapper.destroy()
    })
  })

  describe('event', () => {

    it('支持 change/input/focus/blur 事件.', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName) => {
          const wrapper = mount(Input)
          const callback = sinon.fake()
          wrapper.vm.$on(eventName, callback)
          const inputWrapper = wrapper.find('input')
          inputWrapper.element.value = 'hi'
          inputWrapper.trigger(eventName)
          expect(callback.calledWith('hi')).to.be.true
          wrapper.destroy()
        })
    })
  })
})