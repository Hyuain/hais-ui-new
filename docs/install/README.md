---
title: 安装
---

# 安装

## 简单开始

您可以在使用 parcel、webpack、vue-cli 等搭建的项目中，通过 yarn 或 npm 来安装 Hais-UI，我们推荐您优先使用 yarn。

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

## 按需引入

当然，如果您不愿意全局注册，我们还提供了按需引入的方式。

您依旧可以在 `main.js` 全局引入样式文件。

```js
import 'hais-ui/dist/hais-ui.css'
```

接下来，您就可以按需引入并注册了，需要注意的是，[弹出信息组件](/components/toast.html) 的使用可能有些不同，因为他是以插件的方式提供的，详细内容请查阅相关章节。

```js
import {HaiButton, HaiPopover} from 'hais-ui'

// 全局注册
Vue.component('HaiButton', HaiButton)

// 或者在组件内部注册
export default {
  components: {
    HaiPopover
  }
}
```