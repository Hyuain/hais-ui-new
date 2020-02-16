// import input from "@/components/input"
//
// import {expect} from 'chai';
// import Vue from 'vue'
// import Input from '@/components/input.vue'
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
// describe('Input', () => {
//
//   it('存在.', () => {
//     expect(input).to.exist
//   })
//
//   describe('props', () => {
//     const Constructor = Vue.extend(Input)
//     let vm
//
//     afterEach(function () {
//       vm.$destroy()
//     })
//
//     it('接收 value', () => {
//       vm = new Constructor({
//         propsData: {
//           value: '11234'
//         }
//       }).$mount()
//       const inputElement = vm.$el.querySelector('input')
//       expect(inputElement.value).to.equal('11234')
//     })
//
//     it('接收 disabled', () => {
//       vm = new Constructor({
//         propsData: {
//           disabled: true
//         }
//       }).$mount()
//       const inputElement = vm.$el.querySelector('input')
//       expect(inputElement.disabled).to.equal(true)
//     })
//
//     it('接收 readonly', () => {
//       const vm = new Constructor({
//         propsData: {
//           readonly: true
//         }
//       }).$mount()
//       const inputElement = vm.$el.querySelector('input')
//       expect(inputElement.readOnly).to.equal(true)
//     })
//
//     it('接收 error', () => {
//       vm = new Constructor({
//         propsData: {
//           error: '错了哦'
//         }
//       }).$mount()
//       const useElement = vm.$el.querySelector('use')
//       expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
//       const errorMessage = vm.$el.querySelector('.message-error')
//       expect(errorMessage.innerText).to.equal('错了哦')
//     })
//   })
//
//   describe('event', () => {
//     const Constructor = Vue.extend(Input)
//     let vm
//     afterEach(function () {
//       vm.$destroy()
//     })
//
//     it('支持 change/input/focus/blur 事件', () => {
//       ['change', 'input', 'focus', 'blur']
//         .forEach((eventName) => {
//           vm = new Constructor({}).$mount()
//           const callback = sinon.fake()
//           vm.$on(eventName, callback)
//           const event = new Event(eventName)
//           Object.defineProperty(event, 'target', {
//             value: {value: 'hi'}
//           })
//           const inputElement = vm.$el.querySelector('input')
//           inputElement.dispatchEvent(event)
//           expect(callback).to.have.been.calledWith(event.target.value)
//         })
//     })
//   })
// })