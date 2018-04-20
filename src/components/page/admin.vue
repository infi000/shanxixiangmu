<template>
  <el-container>
    <el-header height="90px">
      <domHeader></domHeader>
    </el-header>
    <el-main>
      <div class="main-box">
        <el-row :gutter="20">
          <el-col :span="12">
            <dl>
              <dt>
                <div><span>后台预览图</span></div><img :src="srcPic1" alt=""></dt>
              <dd>
                <el-button type="primary">管理后台进入</el-button>
              </dd>
            </dl>
          </el-col>
          <el-col :span="12">
            <dl>
              <dt>
                <div><span>前台预览图</span></div><img :src="srcPic2" alt=""></dt>
              <dd>
                <el-button type="primary">前台呈现进入</el-button>
              </dd>
            </dl>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>
<script>
/*jshint esversion: 6 */
import domHeader from "@/components/common/header";

import pic1 from "@/assets/pic1.png";
import pic2 from "@/assets/pic2.png";
export default {
  props: [],
  data() {
    return {
      srcPic1: pic1,
      srcPic2: pic2
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
  background-color: #1c7bef;
  line-height: 90px;
  height: 90px;
  box-sizing: border-box;
  color: #fff;
  padding: 0;
  box-shadow: 0px 1px 1px 0px #000;
}

.main-box {
  width: 90%;
  margin: 180px auto 0;
}

dd {
  margin-top: 62px;
  position: relative;
}

dt {
  position: relative;
}

dt div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

dt div span {
  position: relative;
  top: 40%;
  font-size: 24px;
  color: #fff;
}

dt img {
  width: 100%;
}

</style>
