import Vue from 'vue'
import Router from 'vue-router'

// 页面
import CloudPage from '../cloud-page/cloud-index/cloudlist'

// 组件
import CloudList from '@/components/cloudlist-c'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CloudList',
      component: CloudList
    },
    {
      path: '/index',
      name: 'CloudPage',
      component: CloudPage
    }
  ]
})
