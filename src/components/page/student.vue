<template>
  <el-container>
    <el-header height="90px">
      <domHeader></domHeader>
    </el-header>
     <router-view></router-view>
  </el-container>
</template>
<script>
/*jshint esversion: 6 */
import domHeader from "@/components/common/header";
export default {
  props: [],
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {

  },
  components: {
    domHeader
  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.el-header {
  background-color: #fc8727;
  line-height: 90px;
  height: 90px;
  box-sizing: border-box;
  color: #fff;
  padding: 0;
  box-shadow: 0px 1px 1px 0px #000;
}

</style>
