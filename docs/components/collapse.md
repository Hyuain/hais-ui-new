---
title: 折叠面板 - Collapse
sidebarDepth: 2
---

# 折叠面板

## 简单示例

`collapse` 包括 `collapse` 和 `collapse-item` 两部分，以下是一个简单的示例，默认选中了第一个和第三个标签

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

```html
<hai-collapse :selected="['name1','name3']">
  <hai-collapse-item title="标题1" name="name1">
    <div class="content">这里是第1段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题2" name="name2">
    <div class="content">这里是第2段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题3" name="name3">
    <div class="content">这里是第3段内容</div>
  </hai-collapse-item>
</hai-collapse>
```




## title
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

```html
<hai-collapse-item title="标题1" name="name1">
  <div class="content">这里是第1段内容</div>
</hai-collapse-item>
```

用于设置 `collapse` 的每一项的标题中的值。




## name
<font color=#ff6464>必须</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

```html
<hai-collapse-item title="标题1" name="name1">
  <div class="content">这里是第1段内容</div>
</hai-collapse-item>
```

:::warning 注意
每一项都必须有一个 `name` 属性，否则将会引起错误。
:::

## selected
<font color=#56a7ac>可选</font>

- 类型：`Array`

- 默认值：`[]`

- 用法示例：

```html
<hai-collapse :selected="['name1','name3']">
  <hai-collapse-item title="标题1" name="name1">
    <div class="content">这里是第1段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题2" name="name2">
    <div class="content">这里是第2段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题3" name="name3">
    <div class="content">这里是第3段内容</div>
  </hai-collapse-item>
</hai-collapse>
```

`selected` 属性需要传入一个数组，这个数组包含了默认展开项的 `name`，默认为空数组，即均不展开。

`selected` 属性也支持 `.sync` 语法，可以通过变量动态拿到已展开项实时的 `name`，示例如下：

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

```html
<hai-collapse :selected.sync="selectedItem">

  <hai-collapse-item title="标题1" name="name1">
    <div class="content">这是第1段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题2" name="name2">
    <div class="content">这是第2段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题3" name="name3">
    <div class="content">这是第3段内容</div>
  </hai-collapse-item>
</hai-collapse>

selectedItem: {{selectedItem}}
```




## alone
<font color=#56a7ac>可选</font>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法：

<ClientOnly>
<collapse-demo-3></collapse-demo-3>
</ClientOnly>

```html
<hai-collapse :selected="['name3']" alone>
  <hai-collapse-item title="标题1" name="name1">
    <div class="content">这是第1段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题2" name="name2">
    <div class="content">这是第2段内容</div>
  </hai-collapse-item>

  <hai-collapse-item title="标题3" name="name3">
    <div class="content">这是第3段内容</div>
  </hai-collapse-item>
</hai-collapse>
```

`alone` 为 `true` 时，表示同一时刻最多只能有一项展开。