// import {expect} from 'chai';
// import Vue from 'vue'
// import Popover from '@/components/popover.vue'
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
// describe('Popover', () => {
//
//   it('存在.', () => {
//     expect(Popover).to.be.ok
//   })
//
//   it('可以设置 position.', (done) => {
//     Vue.component('hai-popover', Popover)
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-popover position="bottom" ref="popover">
//         <template slot="content">
//           弹出内容
//         </template>
//         <button>点我</button>
//       </hai-popover>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$el.querySelector('button').click()
//     vm.$nextTick(() => {
//       const {contentWrapper} = vm.$refs.popover.$refs
//       expect(contentWrapper.classList.contains('position-bottom')).to.be.true
//       vm.$el.remove()
//       done()
//     })
//   })
//
//   it('可以设置 trigger.', (done) => {
//     Vue.component('hai-popover', Popover)
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-popover trigger="hover" ref="popover">
//         <template slot="content">
//           弹出内容
//         </template>
//         <button>点我</button>
//       </hai-popover>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       const event = new Event('mouseenter')
//       const popoverEl = vm.$children[0]
//       popoverEl.$el.dispatchEvent(event)
//       vm.$nextTick(() => {
//         const {contentWrapper} = popoverEl.$refs
//         expect(contentWrapper).to.exist
//         vm.$el.remove()
//         done()
//       })
//     })
//   })
// })