<template>
  <div id="app">
    <el-container style="height:100%">
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555555;
  font-size: 14px;
  height: 100%;
}




/**
 * 修改ELEMENT中的一些默认参数
 **/

.el-button--primary {
  background-color: #1c7bef;
  border-color: #1c7bef;
}

.el-button--warning {
  background-color: #fc8727;
  border-color: #fc8727;
}

.bg-blue .el-submenu__icon-arrow {
  color: #fff;
}

.commonTableBox .el-table th {
  background: #ecebeb;
  text-align:center;
}

</style>
