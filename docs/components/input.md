---
title: 输入框 - Input
sidebarDepth: 2
---

# 输入框

## 简单示例

您可以像使用 `html` 自带的 `input` 组件一样，轻松使用我们提供的 `input` 组件。 

<ClientOnly>
<input-demo-6></input-demo-6>
</ClientOnly>

```html
<hai-input></hai-input>
```




## value
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>

```html
<hai-input value="请输入内容"></hai-input>
```

在 `value` 属性中可以传入默认显示的值。




## disabled
<font color=#56a7ac>可选</font>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法示例：

<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>

```html
<hai-input value="不可用" disabled></hai-input>
```

将输入框设置为 `disabled`。




## readonly
<font color=#56a7ac>可选</font>

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法示例：

<ClientOnly>
<input-demo-3></input-demo-3>
</ClientOnly>

```html
<hai-input value="只读" readonly></hai-input>
```

将输入框设置为 `readonly`。




## error
<font color=#56a7ac>可选</font>

- 类型：`String`

- 默认值：`undefined`

- 用法示例：

<ClientOnly>
<input-demo-4></input-demo-4>
</ClientOnly>

```html
<hai-input error="您输入的信息不符合要求！"></hai-input>
```

可以给传入 `error` 传入错误信息，并且将输入框变为 `error` 样式。




## v-model

输入框组件支持 `v-model` 双向绑定。

- 用法示例：

<ClientOnly>
<input-demo-5></input-demo-5>
</ClientOnly>

```html
<hai-input v-model="message"></hai-input>
<p>{{message}}</p>
<hai-button @click="message+=1">点我</hai-button>
```