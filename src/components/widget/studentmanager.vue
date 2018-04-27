<template>
  <el-row>
    <el-col :span="24" class="commonTableBox " v-if="!contentShow">
      <div class="text-left" style="font-size: 18px;padding:20px 5%;">学生列表
        <el-button type="primary" class="pull-right" @click="contentShow='edit'" size="small">录入新学生</el-button>
      </div>
      <template>
        <el-table :data="tableData" style="width: 90%;margin:0 auto;" border>
          <el-table-column prop="realname" label="姓名">
          </el-table-column>
          <el-table-column prop="grade" label="班级">
          </el-table-column>
          <el-table-column label="编辑" width="100">
            <template slot-scope="scope">
              <el-button size="mini" type="warning" plain><i class="el-icon-edit"></i>修改</el-button>
            </template>
          </el-table-column>
          <el-table-column label="删除" width="100">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" plain @click="delUser(scope.row.uid)"><i class="el-icon-delete"></i>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-pagination background layout="prev, pager, next" :total="tableTotle" :page-size="10" class="mrt20 mrtb20" @prev-click="pageTo" @next-click="pageTo" @current-change="pageTo">
      </el-pagination>
    </el-col>
    <el-col v-else>
      <div class="border-blue mrauto pd20" style="margin-top: 130px">
        <h2 class="text-left">编辑/录入新学生 <el-button type="primary" class="pull-right" size="small" @click="dialogVisible = true" disabled>批量导入</el-button></h2>
        <div class="line"></div>
        <el-row style="max-width: 700px;" class="mrauto">
          <el-col :span='6'>
            <el-upload class="avatar-uploader" action="" ref="upload" :show-file-list="false" :auto-upload="false" :on-change="uploaderImg">
              <img v-if="imgUpload" :src="imgUpload" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span='18'>
            <el-form label-width="80px">
              <el-form-item label="登录名:">
                <el-input v-model="form.uname"></el-input>
              </el-form-item>
              <el-form-item label="密码:">
                <el-input v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item label="姓名:">
                <el-input v-model="form.realname"></el-input>
              </el-form-item>
              <el-form-item label="班级:">
                <el-input v-model="form.gradeclass"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit">确定</el-button>
                <el-button type="default" @click="contentShow=''">取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogVisible" width="90%">
          <h2 slot="title" class="text-left">批量导入</h2>
          <h3 class="text-left"><el-button type="text">选择文件</el-button></h3>
          <div class="line"></div>
          <el-row :gutter="16">
            <el-col :span='6'>
              <div class="border">
                <a class="text-warning">X</a>
                <el-row>
                  <el-col :span='10'>
                    <img src="http://www.xiaomaizhibo.com/img/logo.png" alt="" width="100%">
                  </el-col>
                  <el-col :span='14'>
                    <dl>
                      <dd>姓名:dsfasdfs</dd>
                      <dd>班级:sdfdsfasdf</dd>
                    </dl>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="warning" @click="dialogVisible = false">上传</el-button>
          </span>
        </el-dialog>
      </div>
    </el-col>
  </el-row>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {
      imgUpload: '', //预览图片地址
      contentShow: "",
      tableData: [],
      tableTotle: 0,
      dialogVisible: false,
      form: {
        uname: "",
        realname: "",
        utype: 7,
        password: "",
        gradeclass: "",
        file: "", //上传的文件file
      }, //表格值
    };
  },
  computed: {

  },
  methods: {
    /**
     * 本地图片上传验证
     * @param  {[type]} file  [description]
     * @param  {[type]} files [description]
     * @return {[type]}       [description]
     */
    uploaderImg(file, files) {
      const isJPG = file.raw.type === 'image/jpeg';
      const isPNG = file.raw.type === 'image/png';
      const isLt2M = file.raw.size / 1024 / 1024 < 2;
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG格式!');
        return;
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
        return;
      }
      this.imgUpload = file.url;
      this.form.file = file.raw;
    },
    /**
     * 获取成员列表
     * @param  {[type]} page [description]
     * @return {[type]}      [description]
     */
    getUser(page) {
      var that = this;
      var _page = this.tablePage || 1;
      var params = {
        utype: 7,
        page: _page
      };
      var sucf = function(d) {
        that.tableData = d.d;
        that.tableTotle = parseInt(d.c);
      };
      this.$store.commit('getUser', { params: params, sucf: sucf });
    },
    /**
     * 删除
     * @return {[type]} [description]
     */
    delUser(uid) {
      var that = this;
      var sucf = function() {
        // //confirm确定 执行代码
        var _params = {
          userid: uid
        };
        var _sucf = function() {
          //删除成功后回调
          //1执行getUser2提示删除成功
          that.getUser();
          that.$message({
            type: 'success',
            message: '删除成功!'
          });
        };
        that.$store.commit('delUser', { params: _params, sucf: _sucf });
      };

      this.$store.commit('delConfirm', { sucf: sucf });
    },
    /*
    翻页
     */
    pageTo(page) {
      this.tablePage = page;
      this.getUser();
    },
    /**
     * 提交添加新成员表单
     * @return {[type]} [description]
     */
    submit() {
      var that = this;
      var params = this.form;
      var formData = new FormData;
      formData.append('uname', params.uname);
      formData.append('realname', params.realname);
      formData.append('utype', params.utype);
      formData.append('password', params.password);
      formData.append('gradeclass', params.gradeclass);
      formData.append('file', params.file);

      var sucf = function(d) {
        that.$message.success("添加成功！");
        that.contentShow = '';
      };
      this.$store.commit('addUser', { params: formData, sucf: sucf });
    }
  },
  components: {

  },
  created() {

  },
  mounted() {
    this.getUser();
  }


};

</script>
<style scoped>
.el-dialog .border {
  margin-bottom: 16px;
  position: relative;
  padding: 10px;
}

.el-dialog .border .text-warning {
  position: absolute;
  right: 6px;
  top: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

</style>
