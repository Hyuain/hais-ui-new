# Hais UI - 一个简单好用的 UI 框架

[![Build Status](https://travis-ci.com/Hyuain/hais-ui-new.svg?branch=master)](https://travis-ci.com/Hyuain/hais-ui) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Hyuain/hais-ui-new)

## 介绍

我在学习 Vue 的过程中，尝试做了一个简单的基于 Vue.js 的 UI 框架，包含按钮、输入框、布局、弹出信息、标签、气泡卡片、折叠面板等常用组件。他使用方便，在 PC 或移动平台均能很好地适配，并且提供了响应式布局方案，在不同的分辨率下均有良好的稳定性和视觉表现。

详细的使用指南可以访问框架的 [使用文档](https://hais-teatime.com/hais-ui-new/)，框架的设计思路以及所遇到的问题的解决可以去 [我的博客](https://hais-teatime.com/post/2020-01-27-hais-ui/) 里面看看。

## 简单开始

您可以在使用 parcel、webpack、vue-cli 等搭建的项目中，通过 yarn 来安装 Hais-UI。

```bash
yarn add hais-ui
```

然后在您项目的入口文件中（这可能是 `main.js` 或其他 `JavaScript` 文件）引入 Vue、Hais-UI 及对应的 CSS 样式库。

```js
import HaisUI from 'hais-ui'
import 'hais-ui/dist/hais-ui.css'
```

然后您需要注册并启用 Hais-UI 的组件，这将会自动帮您将 Hais-UI 中所有的组件进行全局注册，您之后不需要再在每个组件中手动引入或注册了。

```js
Vue.use(HaisUI)
```

然后您就可以在项目中直接使用 Hais-UI 的组件了，这包括按钮、输入框、网格系统、默认布局、弹出信息、标签、气泡卡片和折叠面板等，在接下来的文章中您会看到如何使用这些组件。

当您安装好 Hais-UI 套件之后，您可以先在 CSS 中将 box-sizing 设置为 border-box，这可以保证效果的一致性，因为该套件中所有的 CSS 样式都是基于 border-box 设计的。

```css
*{ box-sizing: border-box; }
*::before,*::after{ box-sizing: border-box; }
```

然后您就可以在 Vue 中尽情使用 Hais-UI 了。

```html
<template>
  <div id="app">
    <hai-button-group>
      <hai-button icon="likes" @click="showToast">小按钮</hai-button>
      <hai-button @click="showToast">小按钮</hai-button>
      <hai-button @click="showToast">小按钮</hai-button>
    </hai-button-group>
    <hai-popover>
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <hai-button>点击弹出</hai-button>
    </hai-popover>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      showToast() {
        this.$toast('弹出小窗口咯')
      }
    }
  }
</script>

<style>
  * { box-sizing: border-box; }

  *::before, *::after { box-sizing: border-box; }

  #app {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

您可以在 `hais-ui/src` 中找到我们的源文件并做自己喜欢的修改。