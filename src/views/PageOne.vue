<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>

        <a href="/views/PageTwo">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <el-progress type="circle" :percentage="20"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <el-progress type="circle" :percentage="50"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <el-progress type="circle" :percentage="75"></el-progress>
        </el-card>
      </el-col>
    </el-row>
    <el-empty description="描述文字"></el-empty>
  </div>
</template>

<script>
</script>
