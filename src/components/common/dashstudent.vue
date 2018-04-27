<template>
  <el-main>
    <banner></banner>
    <el-row class="dashstuBox1" type="flex" justify="center" align="middle">
      <el-col :span="2">
        <img :src="icon1Src" alt="" height="50px">
      </el-col>
      <el-col :span="5"><span style="font-size: 18px;">平台拥有XXX课件</span></el-col>
      <el-col :span="17">
        <el-row>
          <el-col :span="3" ><a class="dashstuLink1">小学数学</a></el-col>
        </el-row>
      </el-col>
      <el-col :span="2">
        <el-button type="warning" size="small">更多</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;" >
      <el-col :span="12">
        <div class="dashstuPanelBox">
          <div class="dashstuPanelTitleBox">
            <span class="pull-left">小学语文</span>
            <a class="pull-right"><i class="el-icon-more"> </i></a>
          </div>
          <el-row :gutter="20" style="margin-top: 20px;padding: 0 20px;">
            <el-col :span="8">
              <dl>
                <dt>
                  <span class="text-ellipsis">文章标题</span></dt>
                <dd :style="{backgroundImage:'url('+imgSrc+')'}">
                  <el-button type="warning" size="mini">
                    <i class="el-icon-caret-right"></i>
                  </el-button>
                </dd>
              </dl>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="dashstuPanelBox">
          <div class="dashstuPanelTitleBox">
            <span class="pull-left">小学语文</span>
            <a class="pull-right"><i class="el-icon-more"  > </i></a>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
/*jshint esversion: 6 */
import banner from "@/components/widget/banner";
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
    userInfo() {
      var d = USERINFO || {};
      return d;
    }
  },
  methods: {

  },
  components: {
    banner
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

.dashstuBox1 {
  border: 1px solid #ddd;
  height: 80px;
}

.dashstuLink1 {
  font-size: 16px;
  color: #fc8727;
  cursor: pointer;
}

.dashstuPanelBox {

  border: 1px solid #ddd;
}

.dashstuPanelTitleBox {
  height: 44px;
  padding: 0 20px;
  line-height: 44px;
  background: #ebebeb;
}
.dashstuPanelTitleBox .el-icon-more{
  color:#fc8727;
}
dl {
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

dt h2 {
  line-height: 32px;
  height: 32px;
}

dd {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 134px;
  position: relative;
  background-color: #000;
}

dd .el-button {
  position: relative;
  top: 40%;
}

</style>
