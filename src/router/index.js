import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../view/layout/Layout' // 布局
import Dashboard from '../view/dashboard/index' // 首页
import Test from '../view/test/test'
import login from '../view/login/login'


Vue.use(Router);

export default new Router({

  routes: [
    {
      path: "/login",
      name: "login",
      component: login
    }
    , {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/index',
      component: Dashboard
    }



  ]

})
