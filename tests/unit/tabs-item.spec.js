// import {expect} from 'chai';
// import Vue from 'vue'
// import Tabs from '@/components/tabs'
// import TabsHead from '@/components/tabs-head'
// import TabsBody from '@/components/tabs-body'
// import TabsItem from '@/components/tabs-item'
// import TabsPane from '@/components/tabs-pane'
//
// Vue.component('hai-tabs', Tabs)
// Vue.component('hai-tabs-head', TabsHead)
// Vue.component('hai-tabs-body', TabsBody)
// Vue.component('hai-tabs-item', TabsItem)
// Vue.component('hai-tabs-pane', TabsPane)
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
// describe('TabsItem', () => {
//
//   it('存在.', () => {
//     expect(TabsItem).to.exist
//   })
//
//   it('接收 name 属性.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-tabs selected="anime">
//         <hai-tabs-head>
//           <hai-tabs-item name="anime"> 动漫 </hai-tabs-item>
//         </hai-tabs-head>
//         <hai-tabs-body>
//           <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
//         </hai-tabs-body>
//       </hai-tabs>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       vm.$children.forEach((tabs) => {
//         tabs.$children.forEach((head) => {
//           if (head.$options.name === 'HaiTabsHead') {
//             head.$children.forEach((item) => {
//               expect(item.$el.getAttribute('data-name')).to.eq('anime')
//             })
//           }
//         })
//       })
//       vm.$el.remove()
//       vm.$destroy()
//       done()
//     })
//   })
//
//   it('接收 disabled 属性.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-tabs selected="anime">
//         <hai-tabs-head>
//           <hai-tabs-item name="anime" disabled> 动漫 </hai-tabs-item>
//           <hai-tabs-item name="finance"> 经济 </hai-tabs-item>
//         </hai-tabs-head>
//         <hai-tabs-body>
//           <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
//           <hai-tabs-pane name="finance"> 经济相关资讯 </hai-tabs-pane>
//         </hai-tabs-body>
//       </hai-tabs>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     const callback = sinon.fake()
//     vm.$nextTick(() => {
//       vm.$children.forEach((tabs) => {
//         tabs.$children.forEach((head) => {
//           if (head.$options.name === 'HaiTabsHead') {
//             head.$children.forEach((item) => {
//               if (item.name === 'anime') {
//                 expect(item.$el.classList.contains('disabled')).to.be.true
//                 item.$on('click', callback)
//                 item.$el.click()
//                 expect(callback).to.have.not.been.called
//               }
//               if (item.name === 'finance') {
//                 expect(item.$el.classList.contains('disabled')).to.be.false
//                 item.$on('click', callback)
//                 item.$el.click()
//                 expect(callback).to.have.been.called
//               }
//             })
//           }
//         })
//       })
//       vm.$el.remove()
//       vm.$destroy()
//       done()
//     })
//   })
// })