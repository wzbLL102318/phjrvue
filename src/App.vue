<template>
  <div id="app">
    <div class="header">
    </div>
    <router-view/>
    <div>
      <h2> 系统页面底部显示 </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

/*
style标签里面直接写样式，也可以直接引入一个样式文件，scoped关键字表示这个样式是私有的，也就是说，即使两个组件写着一样的#app{}样式也不会冲突，程序会加上命名空间，这也就是为什么在script标签中有个name参数
 */
<style scoped>
@import './assets/css/App.css';
</style>
