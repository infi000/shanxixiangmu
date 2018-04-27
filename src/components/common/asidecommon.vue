<template>
  <el-aside width="222px" class="bg-blue">
    <el-menu default-active="1-0" @open="handleOpen" @close="handleClose" background-color="#1c7bef" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>类型分类</span>
        </template>
        <el-menu-item-group>
          <!--           <el-menu-item index="1-1">精品课</el-menu-item>
          <el-menu-item index="1-2">直播客</el-menu-item>
          <el-menu-item index="1-3">名师授课</el-menu-item> -->
          <el-menu-item v-for="(item,index) in typeInfo.list" :index="'1-'+index" :key="index" @click="getCourseware(item.id)">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>年级分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item,index) in gradeInfo.list" :index="'2-'+index" :key="index">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>学科分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item,index) in coursewareInfo.list" :index="'3-'+index" :key="index">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>教材分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item,index) in textbookInfo.list" :index="'4-'+index" :key="index">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5" style='display: none'>
        <template slot="title">
          <span>播放统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">点击率</el-menu-item>
          <el-menu-item index="5-2">留言</el-menu-item>
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
    return {
      gradeInfo: {
        list: []
      },
      coursewareInfo: {
        list: []
      },
      textbookInfo: {
        list: []
      },
      typeInfo: {
        list: []
      }
    };
  },
  computed: {
pageSize(){
    var p=this.$store.state.pageSize;
    return p;
}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    /**
     * 年级列表接口
     * @return {[type]} [description]
     */
    getGradeList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.gradeInfo.list = d.list;
      };
      this.$store.commit('getGradeList', { params: params, sucf: sucf });
    },
    /**
     * 学科列表
     * @return {[type]} [description]
     */
    getCoursewareList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.coursewareInfo.list = d.list;
      };
      this.$store.commit('getCoursewareList', { params: params, sucf: sucf });
    },
    /**
     * 教材列表
     * @return {[type]} [description]
     */
    getTextbookList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.textbookInfo.list = d.list;
      };
      this.$store.commit('getTextbookList', { params: params, sucf: sucf });
    },
    /**
     * 授课类型列表
     * @return {[type]} [description]
     */
    getTypeList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.typeInfo.list = d.list;
      };
      this.$store.commit('getTypeList', { params: params, sucf: sucf });
    },
    getInfo(_id) {
      var that = this;
      var id = _id;
      var params = {
        id: id
      };
      this.$store.commit('getTypeInfo', { params: params });
    },
    getCourseware(_id) {
      var that = this;
      var id = _id;
      var params = {
        type: id,
        page:1,
        num:that.pageSize

      };
      this.$store.commit('getCourseware', { params: params });
    }
  },
  components: {

  },
  created() {

  },
  mounted() {
    this.getGradeList();
    this.getCoursewareList();
    this.getTextbookList();
    this.getTypeList();
  }

};

</script>
<style scoped>
.el-menu {
  border-right: #1c7bef;
}

.el-menu-item {
  height: 40px;
  line-height: 40px;
}

.el-submenu__title span {
  font-size: 18px;
}

</style>
