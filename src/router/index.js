import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../view/layout/Layout' // 布局
import Dashboard from '../view/dashboard/index' // 首页
import Test from '../view/test/test'
import login from '../view/login/login'
import Test1 from '../view/test/test1'


Vue.use(Router);

export default new Router({

  routes: [
    {
      path: "/login",
      name: "登录",
      component: login
    }
    , {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/index',
      name: '主页',
      component: Dashboard,
      children:[
        {
          path: 'test',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: '测试',
          component: Test
        },{
          path: 'test1',
          name: '测试1',
          component: Test1
        }
      ]
    }


  ]

})
