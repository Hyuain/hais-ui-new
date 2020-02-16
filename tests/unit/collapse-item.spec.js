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
// describe('CollapseItem', () => {
//
//   it('存在.', () => {
//     expect(CollapseItem).to.be.ok
//   })
//
//   it('可以设置 name 和 title.', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <hai-collapse>
//         <hai-collapse-item title="标题1" name="1">内容1</hai-collapse-item>
//       </hai-collapse>
//     `
//     const vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       const collapseEl = vm.$children[0]
//       const collapseItem = collapseEl.$children[0]
//       expect(collapseItem.$refs.title.getAttribute('data-name')).to.eq('1')
//       expect(collapseItem.$refs.title.getAttribute('data-title')).to.eq('标题1')
//       vm.$el.remove()
//       done()
//     })
//   })
// })