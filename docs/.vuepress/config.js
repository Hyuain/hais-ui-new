module.exports = {
  title: 'Hais UI',
  base:'/hais-ui/',
  description: '一个简单好用的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '博客', link: 'https://hais-teatime.com/post/2020-01-27-hais-ui'},
      {text: 'GitHub', link: 'https://github.com/Hyuain/hais-ui'},
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/','/get-started/']
      },
      {
        title: '组件',
        children: ['/components/button', '/components/input', '/components/grid', '/components/layout', '/components/toast', '/components/tabs', '/components/popover', '/components/collapse']
      },
    ]
  }
}