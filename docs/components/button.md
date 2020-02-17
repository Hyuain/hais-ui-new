---
title: 按钮 - Button
sidebarDepth: 2
---

# 按钮
 
 
 
 
## 简单示例

您可以像使用 `html` 自带的 `button` 组件一样，轻松使用我们提供的 `button` 组件。 

<ClientOnly>
<button-demo-5></button-demo-5>
</ClientOnly>

```html
<hai-button>按钮</hai-button>
```

同时，`button` 组件还提供了包括 `icon` `loading` `icon-position` `button-group` 在内的一些新特性。





## icon 
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

<ClientOnly>
<button-demo-1></button-demo-1>
</ClientOnly>

```html
<hai-button>默认</hai-button>
<hai-button icon="settings">设置</hai-button>
<hai-button icon="likes">点赞</hai-button>
<hai-button icon="download">下载</hai-button>
<hai-button icon="left">上一页</hai-button>
<hai-button icon="right">下一页</hai-button>
<hai-button icon="down">展开</hai-button>
```

`button` 组件内置了 6 种 `icon`，可以直接通过 `icon` 属性进行设置；也可以 `Symbol` 的方式引入自定义图标，然后把图标名传给 `icon` 属性。

以上的内置图标和自定义图标也可以通过 `icon` 组件直接使用。

```html
<hai-icon name="settings"></hai-icon>
```




## loading
<font color=#56a7ac>可选</font>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法示例：

<ClientOnly>
<button-demo-2></button-demo-2>
</ClientOnly>

```html
<hai-button icon="settings" loading>按钮</hai-button>
<hai-button icon="settings" :loading="state" @click="state = !state">按钮</hai-button>
```

`loading` 属性可以控制是否显示 `loading` 图标，显示 `loading` 图标时将隐藏之前的图标；也可以给 `loading` 属性传一个变量，达到切换图标的效果。




## icon-position
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`left`

- 可接受值：`left` `right`

- 用法：

<ClientOnly>
<button-demo-3></button-demo-3>
</ClientOnly>

```html
<hai-button icon="settings">按钮</hai-button>
<hai-button icon="settings" icon-position="right">按钮</hai-button>
```

可以通过 `icon-position` 来控制图标的位置，`loading` 图标也将显示在相同的位置。




## button-group
<font color=#56a7ac>可选</font>

- 用法示例：

<ClientOnly>
<button-demo-4></button-demo-4>
</ClientOnly>

```html
<hai-button-group>
  <hai-button icon="left">上一页</hai-button>
  <hai-button>按钮</hai-button>
  <hai-button icon="right" icon-position="right">下一页</hai-button>
</hai-button-group>
```

可以通过 `button-group` 组件来构成一个按钮组，中间的边框、圆角等将自适应，可以自行更改按钮组中按钮的数量。