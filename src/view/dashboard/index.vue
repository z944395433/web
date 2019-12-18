<template>

    <el-container>
  <el-header class="el-header">
    <span>THE INTRESTING</span>
    <div class="demo-typ">
      <span class="tname">{{msg}}</span>
<!--      <span class="tname">{{msg}}</span>-->
      <el-avatar :size="60" class="demo-typ" src="https://empty" @error="errorHandler">
        <img src="../../../static/image/head2.jpg" />
      </el-avatar>
    </div>
  </el-header>
  <el-container class="el-container">
    <el-aside width="200px" height="100%"     background-color="rgb(84, 92, 100)" >
      <el-row class="tac" style="height: 100%">
        <el-col style="height: 100%;">
          <el-menu
            style="height: 100%;"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
<!--                <template slot="title">分组一</template>-->
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group >
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

</template>

 

<script>

  export default {

    name: 'dashboard',

    data () {

      return {
        msg: "卡莎"

      }

    },
    methods: {
      errorHandler() {
        return true
      },
      handleOpen(){},
      handleClose(){}
    }

  }

</script>

 

<style scoped>
  element.style {
    background-color: rgb(84, 92, 100);
  }
  .el-container{
    height: 100%;
  }
  .el-header {
    padding: 0 50px;
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: 3px solid #dcdfe6;
  }
  .demo-typ {
    float:right;
  }
  .tname {
    margin-right: 5px;
    text-align: center;
    line-height: 60px;
    font-weight:bold;
  }
</style>

