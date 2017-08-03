<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <p id="navigation">
      <!--router-link一般用于导航-->
      <router-link to="/first" class="nav1">民投金融</router-link>
      <router-link to="/demo2" class="nav1">凤凰金融</router-link>
    </p>

    <!--路由匹配到的组件全部渲染在router-view里-->
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
      data(){
        return {
          msg:'你想去哪里？？？？'
        }
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #navigation{
    line-height: 50px;
  }
  .nav1{
    display: inline-block;
    /*border: 1px solid #666;*/
    margin-right: 20px;
    background-color: #ccc;
    color: #000;
    text-decoration:none
  }
</style>
