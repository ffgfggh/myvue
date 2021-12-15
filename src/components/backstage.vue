<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span class="logo">xxx后台管理系统</span>
        <el-dropdown>
          <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
          </el-badge>

          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="margin-top: 8px"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-popover placement="top" width="160" v-model="visible">
              <p>你确定退出当前账号吗</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
              </div>
              <el-button slot="reference">退出</el-button>
            </el-popover>
          </el-dropdown-menu>
        </el-dropdown>
        <span>xxx</span>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: 600px; background-color: #545c64">
          <el-menu
            id="navMenu"
            :router="true"
            default-active="/backstage/PageOne"
            unique-opened
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/backstage/PageOne">
              <i class="el-icon-s-operation"></i>
              <span slot="title">首页</span>
            </el-menu-item>

            <el-menu-item index="/backstage/PageTwo">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/backstage/PageThree">
              <i class="el-icon-message"></i>
              <span slot="title">信息列表</span>
            </el-menu-item>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>信息管理</span>
              </template>
              <el-menu-item index="/backstage/PageFour">选项2</el-menu-item>
              <el-menu-item index="/backstage/PageFive">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-data"></i>资金管理
              </template>
              <el-menu-item index="1-1">资金流水</el-menu-item>
              <el-menu-item index="1-2">支付单据</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  margin: 0px;
}
.el-header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
.el-header .logo {
  float: left;
  font-size: 30px;
  margin: 0px 40px;
}
.el-header button {
  margin-bottom: 37px;
}
.el-badge__content.is-fixed {
  top: 13px;
  right: 20px;
}
.el-aside {
  color: #333;
}
</style>
<script>
</script>
