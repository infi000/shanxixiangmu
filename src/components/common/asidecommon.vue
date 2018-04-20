<template>
  <el-aside width="222px" class="bg-blue">
    <el-menu default-active="1-2" @open="handleOpen" @close="handleClose" background-color="#1c7bef" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>类型分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">精品课</el-menu-item>
          <el-menu-item index="1-2">直播客</el-menu-item>
          <el-menu-item index="1-3">名师授课</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>年级分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">一年级</el-menu-item>
          <el-menu-item index="2-2">初一</el-menu-item>
          <el-menu-item index="2-3">高一</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>学科分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">数学</el-menu-item>
          <el-menu-item index="3-2">语文</el-menu-item>
          <el-menu-item index="3-3">化学</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title">
          <span>播放统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">点击率</el-menu-item>
          <el-menu-item index="4-2">留言</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {};
  },
  computed: {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {

  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.el-menu{
  border-right: #1c7bef;
}
.el-menu-item {
    height: 40px;
    line-height: 40px;
}
.el-submenu__title span{
  font-size: 18px;
}

</style>
