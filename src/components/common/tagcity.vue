<template>
  <el-main>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-row class="tagcityInput" type="flex" justify="center" align="middle">
          <el-col :span="2">
            <img :src="icon1Src" alt="" height="50px">
          </el-col>
          <el-col :span="3"><span style="font-size: 24px;">小学语文</span></el-col>
          <el-col :span="17"></el-col>
          <el-col :span="2">
            <el-button type="text"><i class="el-icon-back" style="font-size: 28px;color:#fc8727"></i></el-button>
          </el-col>
        </el-row>
        <div class="tagcityLine"></div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="6" >
        <dl>
          <dt>
            <h2 class="text-ellipsis">文章标题</h2></dt>
          <dd :style="{backgroundImage:'url('+imgSrc+')'}">
            <el-button type="warning" size="mini">
              <i class="el-icon-caret-right"></i>
            </el-button>
          </dd>
        </dl>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="12">
        <el-pagination layout="prev, pager, next" :total="50" class="pull-right">
        </el-pagination>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
/*jshint esversion: 6 */
import img from "@/assets/pic3.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
export default {
  props: [],
  data() {
    return {
      imgSrc: img,
      icon1Src: icon1,
      icon2Src: icon2,
      icon3Src: icon3,
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
  width: 90%;
  margin: 0 auto;
  overflow: inherit;
}

.tagcityInput {
  height: 80px;
  background: #ddd;
}
.tagcityLine{
  height: 1px ;
  width: 100%;
  background-color: #fc8727;
  margin: 16px 0 58px;
}
dl {
  border: 1px solid #ddd;
  margin-bottom: 30px;
}

dt h2 {
  line-height: 54px;
  height: 54px;
}

dd {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 227px;
  position: relative;
  background-color: #000;
}

dd .el-button {
  position: relative;
  top: 40%;
}

</style>
