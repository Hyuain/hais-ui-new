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
// describe('Tabs', () => {
//
//   it('存在.', () => {
//     expect(Tabs).to.exist
//   })
//
//   it('接受 selected 属性.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-tabs selected="finance">
//         <hai-tabs-head>
//           <hai-tabs-item name="anime"> 动漫 </hai-tabs-item>
//           <hai-tabs-item name="finance"> 财经 </hai-tabs-item>
//           <hai-tabs-item name="sports"> 体育 </hai-tabs-item>
//         </hai-tabs-head>
//         <hai-tabs-body>
//           <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
//           <hai-tabs-pane name="finance"> 财经相关资讯 </hai-tabs-pane>
//           <hai-tabs-pane name="sports"> 体育相关资讯 </hai-tabs-pane>
//         </hai-tabs-body>
//       </hai-tabs>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       expect(vm.$el.querySelector(`.tabs-item[data-name="finance"]`).classList.contains('active')).to.be.true
//       vm.$el.remove()
//       vm.$destroy()
//       done()
//     })
//   })
//
//   it('接收 direction 属性.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-tabs selected="finance" direction="vertical">
//         <hai-tabs-head>
//           <hai-tabs-item name="anime"> 动漫 </hai-tabs-item>
//           <hai-tabs-item name="finance"> 财经 </hai-tabs-item>
//           <hai-tabs-item name="sports"> 体育 </hai-tabs-item>
//         </hai-tabs-head>
//         <hai-tabs-body>
//           <hai-tabs-pane name="anime"> 动漫相关资讯 </hai-tabs-pane>
//           <hai-tabs-pane name="finance"> 财经相关资讯 </hai-tabs-pane>
//           <hai-tabs-pane name="sports"> 体育相关资讯 </hai-tabs-pane>
//         </hai-tabs-body>
//       </hai-tabs>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       vm.$children.forEach((tabs) => {
//         expect(tabs.$el.classList.contains('direction-vertical')).to.be.true
//         tabs.$children.forEach((head) => {
//           if (head.$options.name === 'HaiTabsHead') {
//             expect(head.$el.classList.contains('direction-vertical')).to.be.true
//             head.$children.forEach((item) => {
//               expect(item.$el.classList.contains('direction-vertical')).to.be.true
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
// })