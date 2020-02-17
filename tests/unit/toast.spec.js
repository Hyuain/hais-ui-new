import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import sinon from 'sinon'
import Toast from '@/components/toast.vue'

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', () => {

    it('接受 autoClose.', (done) => {
      const wrapper = mount(Toast, {
        propsData: {
          autoClose: 1
        }
      })
      setTimeout(() => {
        expect(wrapper.exists()).to.be.true
      }, 500)
      setTimeout(() => {
        expect(wrapper.exists()).to.be.false
        wrapper.destroy()
        done()
      }, 1200)
    })

    it('接受 closeButton.', (done) => {
      const callback = sinon.fake()
      const wrapper = mount(Toast, {
        propsData: {
          closeButton: {
            text: '关闭',
            callback,
          }
        }
      })
      const closeButtonWrapper = wrapper.find('.close')
      expect(closeButtonWrapper.text()).to.eq('关闭')
      expect(wrapper.exists()).to.be.true
      wrapper.vm.$nextTick(() => {
        closeButtonWrapper.trigger('click')
        expect(callback.called).to.be.true
        expect(wrapper.exists()).to.be.false
        done()
      })
    })

    it('接受 enableHtml.', () => {
      const wrapper = mount(Toast, {
        data() {
          return {
            message: '<strong id="hix">hi</strong>'
          }
        },
        propsData: {
          enableHtml: true
        }
      })
      expect(wrapper.find('#hix').text()).to.eq('hi')
    })

    it('接受 position.', () => {
      const wrapper = mount(Toast,{
        propsData: {
          position: 'bottom'
        }
      })
      expect(wrapper.classes('position-bottom')).to.be.true
    })
  })

})