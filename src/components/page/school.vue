<template>
  <el-container>
    <el-header height="90px">
      <domHeader :type="'common'"></domHeader>
    </el-header>
    <el-container>
    <domAside></domAside>
    <router-view></router-view>

    </el-container>

  </el-container>
</template>
<script>
/*jshint esversion: 6 */
import domHeader from "@/components/common/header";
import domAside from "@/components/common/asidecommon";

export default {
  props: [],
  data() {
    return {};
  },
  computed: {

  },
  methods: {

  },
  components: {
    domHeader,domAside
  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.el-header {
  background-color: #fff;
  line-height: 90px;
  height: 90px;
  box-sizing: border-box;
  color: #1264c8;
  padding: 0;
  box-shadow: 0px 2px 1px 0px #1264c8;
}

</style>
