// import collapse from "@/components/collapse"
//
// import {expect} from 'chai';
// import Vue from 'vue'
// import Collapse from '@/components/collapse.vue'
// import CollapseItem from '@/components/collapse-item.vue'
//
// Vue.component('hai-collapse', Collapse)
// Vue.component('hai-collapse-item', CollapseItem)
//
// Vue.config.productionTip = false
// Vue.config.devtools = false
//
// describe('Collapse', () => {
//
//   it('存在.', () => {
//     expect(Collapse).to.be.ok
//   })
//
//   it('可以设置 alone.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-collapse>
//         <hai-collapse-item title="标题1" name="1">内容1</hai-collapse-item>
//         <hai-collapse-item title="标题2" name="2">内容2</hai-collapse-item>
//         <hai-collapse-item title="标题3" name="3">内容3</hai-collapse-item>
//       </hai-collapse>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       const collapseEl = vm.$children[0]
//       const collapseItems = collapseEl.$children
//       collapseItems[0].$refs.title.click()
//       vm.$nextTick(() => {
//         expect(collapseItems[0].$refs.content).to.exist
//         expect(collapseItems[1].$refs.content).to.not.exist
//         expect(collapseItems[2].$refs.content).to.not.exist
//         vm.$el.remove()
//         done()
//       })
//     })
//   })
//
//   it('可以设置 selected.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-collapse :selected="['1', '2']">
//         <hai-collapse-item title="标题1" name="1">内容1</hai-collapse-item>
//         <hai-collapse-item title="标题2" name="2">内容2</hai-collapse-item>
//         <hai-collapse-item title="标题3" name="3">内容3</hai-collapse-item>
//       </hai-collapse>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       const collapseEl = vm.$children[0]
//       const collapseItems = collapseEl.$children
//       vm.$nextTick(() => {
//         expect(collapseItems[0].$refs.content).to.exist
//         expect(collapseItems[1].$refs.content).to.exist
//         expect(collapseItems[2].$refs.content).to.not.exist
//         vm.$el.remove()
//         done()
//       })
//     })
//   })
// })