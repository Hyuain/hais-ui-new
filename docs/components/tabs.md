---
title: 标签 - Tabs
sidebarDepth: 2
---

# 标签

## 简单示例

`tabs` 组件包含 `tabs` `tabs-head` `tabs-item` `tabs-body` `tabs-pane` 这几个子组件，可以通过这个简单的示例了解他们的层级关系。

<ClientOnly>
<tabs-demo-1></tabs-demo-1>
</ClientOnly>


```html
<hai-tabs selected="sports">

  <hai-tabs-head>
    <template v-slot:actions>
      <hai-button>设置</hai-button>
    </template>
    <hai-tabs-item name="anime"><hai-icon name="likes"></hai-icon> 动漫</hai-tabs-item>
    <hai-tabs-item name="finance" disabled>财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>
```

您可以使用您喜欢的内容替换在 `设置` 位置的 `actions` 插槽的内容。 

```html
<template v-slot:actions>
  <hai-button>设置</hai-button>
</template>
```




## name
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

```html
<hai-tabs-head>
  <hai-tabs-item name="anime">动漫</hai-tabs-item>
  <hai-tabs-item name="finance">财经</hai-tabs-item>
  <hai-tabs-item name="sports">体育</hai-tabs-item>
</hai-tabs-head>

<hai-tabs-body>
  <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
  <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
  <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
</hai-tabs-body>
```
::: warning 注意
每个 `tabs-item` 和 `tabs-pane` 都必须接受一个 `name` 属性，且 `tabs-item` 与其对应的 `tabs-pane` 需要拥有相同的 `name`。
:::




## selected
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

```html
<hai-tabs selected="sports">

  <hai-tabs-head>
    <hai-tabs-item name="anime">动漫</hai-tabs-item>
    <hai-tabs-item name="finance">财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>
```
给 `tabs` 一个 `selected` 属性，其值为默认选中的 `tabs-item` 和 `tabs-pane` 的 `name`。

`selected` 支持 `.sync` 语法，可以通过传入一个变量动态获得 `selected` 实时的值。

<ClientOnly>
<tabs-demo-2></tabs-demo-2>
</ClientOnly>

```html
<hai-tabs :selected.sync="selectedTab">

  <hai-tabs-head>
    <hai-tabs-item name="anime">动漫</hai-tabs-item>
    <hai-tabs-item name="finance">财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>

selectedTab: {{selectedTab}}
```

## direction
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`horizontal`

- 可接受值：`horizontal` `vertical`

- 用法示例：

<ClientOnly>
<tabs-demo-3></tabs-demo-3>
</ClientOnly>

```html
<hai-tabs selected="sports" direction="vertical">

  <hai-tabs-head>
    <hai-tabs-item name="anime">动漫</hai-tabs-item>
    <hai-tabs-item name="finance">财经</hai-tabs-item>
    <hai-tabs-item name="sports">体育</hai-tabs-item>
  </hai-tabs-head>

  <hai-tabs-body>
    <hai-tabs-pane name="anime">动漫相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="finance">财经相关资讯</hai-tabs-pane>
    <hai-tabs-pane name="sports">体育相关资讯</hai-tabs-pane>
  </hai-tabs-body>

</hai-tabs>
```

可以通过 `direction` 属性设置标签为横向或纵向排列。