// import {expect} from 'chai';
// import Vue from 'vue'
// import Toast from '@/components/toast.vue'
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
// describe('Toast', () => {
//
//   it('存在.', () => {
//     expect(Toast).to.exist
//   })
//
//   describe('props', () => {
//     it('接受 autoClose', (done) => {
//       const div = document.createElement('div')
//       document.body.appendChild(div)
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           autoClose: 1
//         }
//       }).$mount(div)
//
//       setTimeout(() => {
//         expect(document.body.contains(vm.$el)).to.eq(false)
//         vm.$el.remove()
//         vm.$destroy()
//         done()
//       }, 1200)
//     })
//
//     it('接受 closeButton', (done) => {
//       const Constructor = Vue.extend(Toast)
//       const callback = sinon.fake()
//       const vm = new Constructor({
//         propsData: {
//           closeButton: {
//             text: '关闭',
//             callback,
//           }
//         }
//       }).$mount()
//       let closeButton = vm.$el.querySelector('.close')
//       expect(closeButton.textContent.trim()).to.eq('关闭')
//       setTimeout(() => {
//         closeButton.click()
//         expect(callback).to.have.been.called
//         vm.$el.remove()
//         vm.$destroy()
//         done()
//       })
//     })
//
//     it('接受 enableHtml', () => {
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         data() {
//           return {
//             message: '<strong id="hix">hi</strong>'
//           }
//         },
//         propsData: {
//           enableHtml: true
//         }
//       })
//       vm.$mount()
//       expect(vm.$el.querySelector('#hix')).to.exist
//       vm.$el.remove()
//       vm.$destroy()
//     })
//
//     it('接受 position', () => {
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           position: 'bottom'
//         }
//       }).$mount()
//       expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
//     })
//   })
//
// })