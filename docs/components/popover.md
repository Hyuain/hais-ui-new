---
title: 气泡卡片 - Popover
sidebarDepth: 2
---

# 气泡卡片

## 简单示例

`popover` 组件由 `popover` 和 `popover-items` 二者构成，可以通过下面的这个简单示例了解他的基本用法。

<ClientOnly>
<popover-demo-4></popover-demo-4>
</ClientOnly>

```html
<hai-popover>
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>点击弹出 Popover</hai-button>
</hai-popover>
```




## position
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`top`

- 可接受值：`bottom` `top` `left` `right`

- 用法示例：

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

```html
<hai-popover position="bottom">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>从下方弹出</hai-button>
</hai-popover>

<hai-popover>
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>从上方弹出</hai-button>
</hai-popover>

<hai-popover position="left">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>从左侧弹出</hai-button>
</hai-popover>

<hai-popover position="right">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>从右侧弹出</hai-button>
</hai-popover>
```

注意 `popover` 的内容需要写在 `<template v-slot:content></template>` 标签中。

在 `popover` 的内容中预置了手动关闭标签的方法，可以通过 `button` 等触发手动关闭标签，您需要这样写：

```html
<hai-popover position="bottom">
  <template v-slot:content="methods">
    <div>这是气泡卡片的内容</div>
    <hai-button @click="methods.close">点击</hai-button>
  </template>
  <hai-button>手动关闭标签示例</hai-button>
</hai-popover>
```

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>




## trigger
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`click`

- 可接受值： `click` `hover`

- 用法示例：

<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

```html
<hai-popover>
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>点击弹出</hai-button>
</hai-popover>

<hai-popover trigger="hover">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <hai-button>悬浮弹出</hai-button>
</hai-popover>
```

可以通过 `trigger` 属性设置触发 `popover` 的方式是 `click` 或者 `hover`。