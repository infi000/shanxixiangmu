<template>
  <div class="login_wrap">
    <div class="login_box">
      <div class="login_title">教育资源管理平台</div>
      <div class="login_box_body">
        <div class="login_box_input">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="3">
              <div class="grid-content"><i class="fas fa-user pull-right"></i></div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content"><span>用户名</span></div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-input size="medium" placeholder="请输入用户名">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-button type="primary" size="medium">登陆</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="login_box_input">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="3">
              <div class="grid-content"><i class="fas fa-lock pull-right"></i></div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content"><span>密码</span></div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-input size="medium" placeholder="请输入密码" type="password">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-button type="info" size="medium">注册</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="login_box_tool">
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="10">
              <el-checkbox>记住密码</el-checkbox>
            </el-col>
            <el-col :span="2">|</el-col>
            <el-col :span="10">
              <el-button type="text">忘记密码</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
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
.login_wrap {
  width: 100%;
  height: 100%;
  background: #aae1eb;
}
.login_title{
  font-size: 30px;
    color: #1c7bef;
      letter-spacing: .3em;
}
.login_box {
  width: 800px;
  margin: 100px auto;
}

.login_box_body {
  width: 600px;
  margin: 60px auto 0;
  padding: 80px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: rgba(233, 233, 233, 0.28);
  border-radius: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
}




.login_box_input {
  margin-top: 20px;
}

.login_box_input .fas {
  /*margin-left: 8px;*/
}

.login_box_tool {
  width: 200px;
  margin: 50px auto 0;
}

</style>
