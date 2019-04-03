//  template标签里面的内容都注入到App.vue页面中的router-view标签中，从而实现无刷新的路由跳转。

<template>
  <div class="mod-module mod-parallel">
    <div class="img-list type-full">
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/btn">按钮</a>
        </p>
      </div>
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/list">列表</a>
        </p>
      </div>
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/nav">导航</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
 @import '../../../static/css/index.css';
</style>
