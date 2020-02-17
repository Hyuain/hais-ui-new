---
title: 弹出信息 - Toast
sidebarDepth: 2
---

# 弹出信息

## 按需引入

您需要这样使用 Toast 组件，因为他是以插件的形式提供的。当然，如果您已经全局自动注册了 Hais-UI，可以忽略这部分。

```js
import {HaiToast} from 'hais-ui'
Vue.use(HaiToast)
```

## 简单示例

您可以在需要的地方编写函数来调用 `toast` 组件，比如在点击按钮时触发，所有的弹出信息在同一时间只会在页面上存在一个。

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

```html
<hai-button @click="showToast">弹出信息</hai-button>
```

```js
new Vue({
  methods: {
    showToast() {
      this.$toast('这是一条弹出信息')
    }
  }
}).$mount('#app')
```




## this.$toast()

就像上面的示例一样，您可以通过 `this.$toast()` 方法来使用 `toast` 组件，他接受两个参数：`message` 和 `options`，下面会介绍这两个参数的具体内容。

## message
<font color=#ff6464>必须</font>

- 类型：`String` `Html`

- 默认值：`undefined`

- 用法示例：

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

```js
showToast1() {
  this.$toast('Hais Teatime')
},
showToast2() {
  this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
    enableHtml: true
  })
}
```

可以在 `message` 中传入想要在 `toast` 中显示的内容，该参数接受 `String` 和 `Html` 两种格式的内容。

::: warning 注意
如果想要在 `message` 中使用 `Html` 内容，需要先开启 `enableHtml` 选项，该选项默认为关闭状态。
:::




## options
<font color=#56a7ac>可选</font>

- 类型：`Object`

`options` 是 `$toast.()` 接受的第二个参数，他是一个对象，并且包含以下这些属性，这些属性都是可选的：




### autoClose

- 类型：`Boolean` `Number`

- 默认值：`5`

- 可接受值：`false` `Number`

- 用法示例：

```js
this.$toast('Hais Teatime', {
  autoClose: false
})
```

若 `autoClose` 的值为 `false`，则弹出信息不会自动关闭；否则需要传入一个数字，代表其自动关闭的秒数；若不写 `autoClose` 属性，则默认 5 秒后自动关闭。




### closeButton

- 类型：`Object`

- 用法示例：

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

```js
this.$toast('有关闭按钮的弹出信息', {
  autoClose: false,
  closeButton: {
    text: '知道了',
    callback(toast) {
      console.log('用户说他知道了')
      console.log(toast)
    },
  },
})
```

`closeButton` 是一个对象，用于定义关闭按钮的属性。

其中 `text` 属性用来控制关闭按钮显示的文字，除此之外还可以传入一个 `callback`，当用户点击关闭时调用，并会将这个 `toast` 组件作为参数传入。




### position

- 类型：`String`

- 默认值：`top`

- 可接受值：`top` `bottom` `middle`

- 用法示例：

<ClientOnly>
<toast-demo-4></toast-demo-4>
</ClientOnly>

```html
<hai-button @click="showToast1">从顶部弹出</hai-button>
<hai-button @click="showToast2">在中间弹出</hai-button>
<hai-button @click="showToast3">从下方弹出</hai-button>
```

```js
showToast1() {
  this.showToast('top')
},
showToast2() {
  this.showToast('middle')
},
showToast3() {
  this.showToast('bottom')
},
showToast(position) {
  this.$toast('这是一条弹出信息',
    {
      autoClose: false,
      position: position,
      closeButton: {
        text: '知道了'
      }
    }
  )
}
```

`position` 可以控制弹出信息的弹出位置。



### enableHtml

- 类型：`Boolean`

- 默认值：`false`

- 可接受值：`true` `false`

- 用法示例：

<ClientOnly>
<toast-demo-5></toast-demo-5>
</ClientOnly>

```js
showToast1() {
  this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
    enableHtml: false
  })
},
showToast2() {
  this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
    enableHtml: true
  })
}
```

出于安全性考虑，默认是禁用 `enableHtml` 的，如果需要使用，请手动开启。