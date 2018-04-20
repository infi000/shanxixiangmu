<template>
  <div style="height: 100%;width: 100%">
    <el-container>
      <el-aside width="466px">
        <el-row>
          <el-col :span="10"><img :src="(type=='common')?logoSrc2:logoSrc" alt="" style="margin-top: 20px"></el-col>
          <el-col :span="2">|</el-col>
          <el-col :span="12"><span style="font-size: 24px;">教育资源管理平台</span></el-col>
        </el-row>
      </el-aside>
      <el-main>
        <el-row >
          <el-col :span="6"  :offset="14"><i class="fas fa-user"></i>欢迎,<span>张嬷嬷</span></el-col>
          <el-col :span="4"><el-button type="text" :style="{color:(type=='common')?'#000':'auto'}"><i class="fas fa-sign-out-alt"></i>退出</el-button></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
/*jshint esversion: 6 */
import logo from "@/assets/xiaomailogo.png";
import logo2 from "@/assets/xiaomailogo2.png";
export default {
  props: ['type'],
  data() {
    return {
      logoSrc: logo,
      logoSrc2: logo2
    };
  },
  computed: {

  },
  methods: {

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
.el-main {
  padding: 0;
}

.el-button{
  font-size: 18px;
  color: #fff;
}
.el-button--text:focus, .el-button--text:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
}
.el-main {
  font-size: 18px;
}


.fas {
  margin-right: 8px;
}

</style>
