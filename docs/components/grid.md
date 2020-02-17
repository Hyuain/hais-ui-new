---
title: 网格系统 - Grid
sidebarDepth: 2
---

# 网格系统

## 简单示例

网格系统主要由 `row` `col` 这两个组件组成，每个 `row` 包裹多个 `col`，形成每一排的布局。

<ClientOnly>
<grid-demo-6></grid-demo-6>
</ClientOnly>

```html
<hai-row id="container" auto>
  <hai-col id="item1"></hai-col>
  <hai-col id="item2"></hai-col>
  <hai-col id="item3"></hai-col>
  <hai-col id="item4"></hai-col>
  <hai-col id="item5"></hai-col>
</hai-row>
```


## auto
<font color=#1fab89>可选</font>

- 类型：`Boolean`

- 默认值：`false`

- 用法示例：

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

```html
<hai-row id="container" auto>
  <hai-col id="item1"></hai-col>
  <hai-col id="item2"></hai-col>
  <hai-col id="item3"></hai-col>
</hai-row>
```
```css
#item1, #item2, #item3{
  width: 100%;
}
```

在 `row` 组件上的 `auto` 属性会将所有的 `col` 组件放在一排并平均占据总跨度。

:::warning 注意
使用 `auto` 时需要为 `col` 加上宽度，若没有加宽度，请使用 `span` 来指定跨度，否则宽度为 0。
:::




## gutter
<font color=#1fab89>可选</font>

- 类型：`String` `Number`

- 默认值：`undefined`

- 可接受值：`Number`

- 用法示例：

<ClientOnly>
<grid-demo-4></grid-demo-4>
</ClientOnly>

```html
<hai-row id="container" auto gutter="20">
  <hai-col id="box1">
    <div id="item1"></div>
  </hai-col>
  <hai-col id="box2">
    <div id="item2"></div>
  </hai-col>
  <hai-col id="box3">
    <div id="item3"></div>
  </hai-col>
</hai-row>
```

`gutter` 可以设置每个 `col` 内部元素之间的距离，一般在 `auto` 的情况下使用。




## span
<font color=#1fab89>可选</font>

- 类型：`String` `Number`

- 默认值：`undefined`

- 可接受值：`0` ~ `24`

- 用法示例：

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

```html
<hai-row id="container">
  <hai-col id="item1" span="4"></hai-col>
  <hai-col id="item2" span="12"></hai-col>
  <hai-col id="item3" span="8"></hai-col>
</hai-row>
```

可以用 `span` 为每个 `col` 手动分配占据总跨度比例，每排一共 `24` 份，若同一个 `row` 中的几个 `col` 的 `span` 之和超过 `24`，末尾的元素将会换行。




## offset
<font color=#1fab89>可选</font>

- 类型：`String` `Number`

- 默认值：`undefined`

- 可接受值：`0` ~ `24`

- 用法示例：

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

```html
<hai-row id="container">
  <hai-col id="item1" span="4"></hai-col>
  <hai-col id="item2" span="12" offset="2"></hai-col>
  <hai-col id="item3" span="2" offset="4"></hai-col>
</hai-row>
```

可以用 `offset` 为每个 `col` 设置距离其左边 `col` 的份数，若同一个 `row` 中的几个 `col` 的 `span` 和 `offset` 之和超过 `24`，末尾的元素将会换行。




## 响应式布局

布局组件支持响应式布局，内置 5 种宽度范围，当没有写对应范围的样式时，将默认向下取值。

|     属性      |      宽度      |
|    :----:    |    :----:      |
|      默认     |   0px ~ 576px  |
|     pad      |  577px ~ 768px |
|   narrow-pc  |  769px ~ 992px |
|      pc      |  993px ~ 1200px |
|    wide-pc   |    ≥ 1201px    |

- 示例用法：

<ClientOnly>
<grid-demo-5></grid-demo-5>
</ClientOnly>


```html
<hai-row id="container">
  <hai-col id="item1" span="24"
         :pad="{span:8}"
         :narrow-pc="{span:6}"
         :pc="{span:4}"
         :wide-pc="{span:2}"
  ></hai-col>
  <hai-col id="item2" span="24"
         :pad="{span:15, offset:1}"
         :narrow-pc="{span:17,offset:1}"
         :pc="{span:18,offset:2}"
         :wide-pc="{span:19, offset:3}"
  ></hai-col>
</hai-row>
```