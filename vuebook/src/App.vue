<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.KeepAlive"/>
        </keep-alive>
    </transition> 
    <transition>
        <router-view v-if="!$route.meta.KeepAlive"/>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
// 引入基础组件Tab
import Tab from './base/Tab';

export default {
  name: 'App',
//   注册组件
  components: {
      Tab,
      
  }
}
</script>

<style lang="less">
div,a,body,ul,li,i,span,img{
    margin:0;
    padding:0;
}
a{
    text-decoration:none;
}
li{
    list-style: none;
}
input,button{
    -webkit-appearance:none;
}
/* 主体内容 样式 */
.mainContent{
        position:fixed;
        left:0;
        top:40px;
        bottom:40px;
        width:100%;
        overflow:auto;
        
}
.fade-enter{
    opacity:0;
}
.fade-enter-active{
    transition: all 0.5s linear;
}
.fade-leave-active{
    opacity:0;
    transition: all 0.5s linear;
}
</style>
