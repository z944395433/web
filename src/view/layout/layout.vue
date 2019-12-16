<template>

    <el-container style="height: 500px; border: 1px solid #eee">
          <el-header>
            <h1>admin</h1>
          </el-header>
      <!-- 左侧菜单 -->
          <el-aside>
            <div class="left-con">

                    <el-menu class="el-menu-vertical-demo" :router="true">

                        <el-menu-item v-for="(item, index) in routesArr" :index="index+''" :route="item" :key="index">

                          <i class="el-icon-menu"></i>

                          <span slot="title">{{item.name}}</span>

                        </el-menu-item>

                    </el-menu>

                  </div>
          </el-aside>
     

      <!-- 右侧内容 -->

        <el-main>
          <div class="center-con">

                    <!-- router-view 用于视图切换区域 -->

                  <router-view />

                </div>

        </el-main>
     
    </el-container>

</template>


<script>

  export default {

    name: 'Layout',

    data () {

      return {
        routesArr: [
          {
            name: "首页",
            path: "/dashboard"
          },
          {
            name: "测试",
            path: "/test/index"
          }
        ]
      }
    },

    mounted () {

      //   打印一下看看路由

      console.log(this.$router.options.routes);

    }

  }

</script>

 


