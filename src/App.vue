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
.commonTableBox {

  border: 1px solid #ccc;
}

.commonTableBox .el-table th {
  background: #ecebeb;
  text-align:center;
}


.commonTableBox .el-table img {
  width: 100%;
}

/*上传框*/

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
