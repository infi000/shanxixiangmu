<template>
  <el-row>
    <el-col :span="24" class="commonTableBox " v-if="!contentShow">
      <div class="text-left" style="font-size: 18px;padding:20px 5%;">教师列表
        <el-button type="primary" class="pull-right" @click="contentShow='edit'" size="small">录入新教师</el-button>
      </div>
      <template>
        <el-table :data="tableData" style="width: 90%;margin:0 auto;" border :row-class-name="tableRowClassName">
          <el-table-column label="教师头像" width="180">
            <template slot-scope="scope">
              <img :src="headHost+scope.row.head" alt="" @error="imgErr($event)" style="max-width:100%">
            </template>
          </el-table-column>
          <el-table-column prop="realname" label="姓名">
          </el-table-column>
          <el-table-column prop="ttypename" label="职称">
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
        <h2 class="text-left">编辑/录入新教师</h2>
        <div class="line"></div>
        <el-row style="max-width: 700px;" class="mrauto">
          <el-col :span='6'>
            <el-upload class="avatar-uploader" ref="upload" action="" :show-file-list="false" :auto-upload="false" :on-change="uploaderImg">
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
              <el-form-item label="职称:">
                <el-select v-model="form.ttype" clearable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit">确定</el-button>
                <el-button type="default" @click="contentShow=''">取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
/*jshint esversion: 6 */
import default_head from "@/assets/default_head.png";
export default {
  props: [],
  data() {
    return {
      headHost: URL_dev.imghost, //头像服务器地址
      default_head: default_head, //默认头像地址
      imgUpload: '', //预览图片地址
      contentShow: "",
      tableData: [], //获取用户列表
      tableTotle: 0, //用户总数
      tablePage: 1, //表格当前页数
      options: [{
        value: '1',
        label: '录课发起人'
      }, {
        value: '2',
        label: '名师工作室'
      }, {
        value: '3',
        label: '学科带头人'
      }, {
        value: '4',
        label: '优秀教师'
      }],
      form: {
        uname: "",
        password: "",
        realname: "",
        ttype: "",
        utype: 6,
        file: "", //上传的文件file
      }, //表格值

    };
  },
  computed: {

  },
  watch: {

  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'warning-row';
      }
      return '';
    },
    handlePreview(file) {
      console.log(file);
    },
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
     * 提交添加新成员表单
     * @return {[type]} [description]
     */
    submit() {
      var that = this;
      var params = this.form;
      var formData = new FormData;

      formData.append('uname', params.uname);
      formData.append('password', params.password);
      formData.append('realname', params.realname);
      formData.append('ttype', params.ttype);
      formData.append('utype', params.utype);
      formData.append('headimg', params.file);
      var sucf = function(d) {
        that.$message.success("添加成功！");
        that.contentShow = '';

      };
      this.$store.commit('addUser', { params: formData, sucf: sucf });
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
        utype: 6,
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
        that.$store.commit('delUser',{params:_params,sucf:_sucf});
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

    //图片容错
    imgErr(e) {
      var ele = e.target;
      ele.src = this.default_head;
      ele.style.width = 'auto';
      ele.style.height = 'auto';
    },
  },
  components: {

  },
  created() {},
  mounted() {
    this.getUser();
  }

};

</script>
