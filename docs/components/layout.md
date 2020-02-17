---
title: 默认布局 - Layout
sidebarDepth: 2
---

# 默认布局

提供 `container` `sider` `header` `content` `footer` 组件进行布局，并可进行嵌套使用，组件自带了对应的类名，可直接书写样式。

<br>

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

```html
<hai-container>
  <hai-sider>sider</hai-sider>
  <hai-container>
    <hai-header>header</hai-header>
    <hai-content>content</hai-content>
    <hai-footer>footer</hai-footer>
  </hai-container>
</hai-container>
```
```css
.container {
  height: 200px;
  color: #fff;
  font-size: 1.3em;
}
.sider, .content, .footer, .header{
  display: flex;
  justify-content: center;
  align-items: center;
}
.sider {
  width: 20%;
  background-color: #71c9ce;
}
.content{
  background-color: #cbf1f5;
  color:  #71c9ce;
}
.header, .footer{
  background-color: #1fab89;
  height: 50px;
}
```