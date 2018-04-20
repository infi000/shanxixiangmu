<template>
  <el-main>
    <banner></banner>
    <div class="main-box">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="dl-box">
            <dl>
              <dt>
                <img :src="icon1Src" alt="" height="70px">
              </dt>
              <dd class="dd-mid">平台拥有XX所学校</dd>
              <dd>
                <el-row>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                </el-row>
              </dd>
              <dd class="dd-end">
                <el-button type="warning" size="mini" class="pull-right">更多</el-button>
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="dl-box">
            <dl>
              <dt>
                <img :src="icon2Src" alt="" height="70px">
              </dt>
              <dd class="dd-mid">平台拥有XX课件</dd>
              <dd>
                <el-row>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                </el-row>
              </dd>
              <dd class="dd-end">
                <el-button type="warning" size="mini" class="pull-right">更多</el-button>
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="dl-box">
            <dl>
              <dt>
                <img :src="icon3Src" alt="" height="70px">
              </dt>
              <dd class="dd-mid">平台拥有XX老师</dd>
              <dd>
                <el-row>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                  <el-col :span="12">xxxxxxx小学</el-col>
                </el-row>
              </dd>
              <dd class="dd-end">
                <el-button type="warning" size="mini" class="pull-right">更多</el-button>
              </dd>
            </dl>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>
<script>
/*jshint esversion: 6 */
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import banner from "@/components/widget/banner";
export default {
  props: [],
  data() {
    return {
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
      banner
  },
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>


.main-box {
  width: 80%;
  margin: 0 auto;
}

.city-banner {
  height: 369px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
}

.dl-box {
  border: 1px solid #ccc;
  padding: 20px 24px;
}

.dl-box dd {
  overflow: hidden;
}

.dd-mid {
  margin: 16px 0 40px;
  border-bottom: 1px solid #fc8727;
  font-size: 18px;
}

.dd-end {
  margin-top: 20px;
}

dd .el-col {
  height: 44px;
  line-height: 44px;
}

</style>
