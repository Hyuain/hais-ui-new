<template>
  <div>
    <hai-container>
      <hai-sider>sider</hai-sider>
      <hai-container>
        <hai-header>header</hai-header>
        <hai-content>content</hai-content>
        <hai-footer>footer</hai-footer>
      </hai-container>
    </hai-container>
  </div>
</template>

<script>
  import Container from "../../../../src/container"
  import Sider from "../../../../src/sider"
  import Header from "../../../../src/header"
  import Content from "../../../../src/content"
  import Footer from "../../../../src/footer"

  export default {
    components: {
      'hai-container': Container,
      'hai-sider': Sider,
      'hai-header': Header,
      'hai-content': Content,
      'hai-footer': Footer
    }
  }
</script>

<style scoped>
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
    background-color: #56a7ac;
    height: 50px;
  }
</style>