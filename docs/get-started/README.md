---
title: 快速上手
---

# 快速上手

当您安装好 Hais-UI 套件之后，您需要先在 CSS 中将 `box-sizing` 设置为 `border-box`，因为该套件中所有的 CSS 样式都是基于 `border-box` 设计的。

```css
*{ box-sizing: border-box; }
*::before,*::after{ box-sizing: border-box; }
```

您可以在 HTML 文件或 Vue 的 `template` 中直接使用组件，比如：

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

您可以在 `hais-ui/src` 文件夹中查看组件的源代码，并修改自己喜欢的样式。