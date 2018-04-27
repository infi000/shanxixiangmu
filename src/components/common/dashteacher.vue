<template>
  <el-main>
    <div style="margin:0 auto;width: 80%">
      <div class="text-22 text-left mrt20">欢迎<span class="text-24 text-blue">{{userInfo.uname||userInfo.uname}}</span>登录后台，平台共拥有XX课件。
        <el-row class="pull-right">
          <el-button size="small" :type="contentShow=='addBid'?'primary':'default'" @click="showAddBid">添加编目信息</el-button>
          <el-button size="small" :type="contentShow=='addCourseware'?'primary':'default'" @click="showAddCourseware">添加课件</el-button>
          <el-button size="small" :type="contentShow=='schedule'?'primary':'default'" @click="contentShow='schedule'" disabled>课表管理</el-button>
          <el-button size="small" :type="contentShow=='release'?'primary':'default'" @click="showRelease">已发布课件</el-button>
          <el-button size="small" :type="contentShow=='unRelease'?'primary':'default'" @click="showUnRelease">未发布课件</el-button>
        </el-row>
      </div>
      <div class="line"></div>
      <el-row v-if="contentShow=='unRelease'" key="unRelease">
        <el-col :span="24" class="commonTableBox ">
          <div class="text-left" style="font-size: 18px;padding:20px 5%;">未发布课件</div>
          <el-table :data="unReleaseInfo.list" style="width: 90%;margin:0 auto;" border>
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="课件预览图" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.image" alt="" class="maxwh100">
              </template>
            </el-table-column>
            <el-table-column prop="title" label="课件名称">
            </el-table-column>
            <el-table-column prop="author" label="职称">
            </el-table-column>
            <el-table-column label="编辑" width="100">
              <template slot-scope="scope">
                <el-button size="mini" type="warning" plain @click="handelChangeCoursewareform(scope.row)"><i class="el-icon-edit"></i>修改</el-button>
              </template>
            </el-table-column>
            <!--        <el-table-column label="发布状态" :filters="[{text:'内部浏览',value:'内部浏览'},{text:'发布到学生',value:'发布到学生'},{text:'发布到区县委',value:'发布到区县委'}]" :filter-method="filterStatus" prop="status">
              <template slot-scope="scope">
                <span class="text-blue">{{scope.row.status}}</span>
              </template>
            </el-table-column> -->
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" plain @click="releaseCourseware(scope.row.id)">发布</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="unReleaseInfo.total" :page-size="pageSize" class="mrt20 mrtb20" @prev-click="pageToUnRelease" @next-click="pageToUnRelease" @current-change="pageToUnRelease">
          </el-pagination>
        </el-col>
      </el-row>
      <el-row v-else-if="contentShow=='release'" key="release">
        <el-col :span="24" class="commonTableBox ">
          <div class="text-left" style="font-size: 18px;padding:20px 5%;">未发布课件</div>
          <el-table :data="releaseInfo.list" style="width: 90%;margin:0 auto;" border>
            <el-table-column label="课件预览图" width="180">
              <template slot-scope="scope2">
                <img :src="scope2.row.image" alt="" class="maxwh100">
              </template>
            </el-table-column>
            <el-table-column prop="title" label="课件名称">
            </el-table-column>
            <el-table-column prop="author" label="职称">
            </el-table-column>
            <el-table-column label="编辑" width="100">
              <template slot-scope="scope2">
                <el-button size="mini" type="warning" plain @click="handelChangeCoursewareform(scope2.row)"><i class="el-icon-edit"></i>修改</el-button>
              </template>
            </el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope2">
                <span class="text-blue">{{scope2.row.status}}</span>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="releaseInfo.total" :page-size="pageSize" class="mrt20 mrtb20" @prev-click="pageToRelease" @next-click="pageToRelease" @current-change="pageToRelease">
          </el-pagination>
        </el-col>
      </el-row>
      <el-row v-else-if="contentShow=='schedule'" key='schedule'>
        <div class="border-blue mrauto pd20" style="margin-top: 30px">
          <h2 class="text-left">课表管理 </h2>
          <div class="line"></div>
          <el-form label-width="80px" class="mrauto" style="max-width:600px">
            <el-form-item label="直播盒子:">
              <el-select v-model="selectBoxVal" clearable placeholder="请选择" class="pull-left">
                <el-option v-for="item in boxOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开机时间:">
              <el-select v-model="selectsWeekVal" clearable class="pull-left">
                <el-option v-for="item in weekOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <span class="pull-left">---</span>
              <el-time-picker v-model="sweekTimeVal" placeholder="任意时间点" class="pull-left">
              </el-time-picker>
            </el-form-item>
            <el-form-item label="结束时间:">
              <el-select v-model="selecteWeekVal" clearable class="pull-left">
                <el-option v-for="item in weekOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <span class="pull-left">---</span>
              <el-time-picker v-model="eweekTimeVal" placeholder="任意时间点" class="pull-left">
              </el-time-picker>
            </el-form-item>
            <el-form-item label="周期:">
              <el-select v-model="selectCycleVal" clearable class="pull-left">
                <el-option v-for="item in cycleOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确定</el-button>
              <el-button type="default" @click="contentShow=''">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-row>
      <el-row v-else-if='contentShow=="addCourseware"'>
        <div class="border-blue mrauto pd20" style="margin-top: 30px">
          <h2 class="text-left">添加课件 </h2>
          <div class="line"></div>
          <el-form label-width="80px" class="mrauto" style="max-width:600px">
            <el-row :gutter="20">
              <el-col :span="18">
                <el-form-item label="题目:">
                  <el-input v-model="addCoursewareform.title"></el-input>
                </el-form-item>
                <el-form-item label="编目:">
                  <el-select v-model="addCoursewareform.bid" clearable placeholder="编目信息" class="pull-left">
                    <el-option v-for="item in bidInfo.list" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="视频地址:">
                  <el-input v-model="addCoursewareform.video"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-upload class="avatar-uploader" action="" ref="upload" :show-file-list="false" :auto-upload="false" :on-change="uploaderImg">
                  <img v-if="imgUpload" :src="imgUpload" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注：">
                  <el-input v-model="addCoursewareform.remark"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleAddCourseware">确定</el-button>
                  <el-button type="default" @click="resetForm">取消</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-row>
      <el-row v-else-if="contentShow=='addBid'">
        <div class="border-blue mrauto pd20" style="margin-top: 30px">
          <h2 class="text-left">添加编目信息 </h2>
          <div class="line"></div>
          <el-form label-width="100px" class="mrauto" style="max-width:400px">
            <el-form-item label="年级列表:">
              <el-select v-model="gradeInfo.bid" clearable placeholder="年级列表">
                <el-option v-for="item in gradeInfo.list" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学科列表:">
              <el-select v-model="CoursewareInfo.bid" clearable placeholder="学科列表">
                <el-option v-for="item in CoursewareInfo.list" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="教材列表:">
              <el-select v-model="textbookInfo.bid" clearable placeholder="教材列表">
                <el-option v-for="item in textbookInfo.list" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="授课类型列表:">
              <el-select v-model="typeInfo.bid" clearable placeholder="授课类型列表">
                <el-option v-for="item in typeInfo.list" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addBid">确定</el-button>
              <el-button type="default" @click="contentShow='unRelease'">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-row>
    </div>
    <el-dialog title="修改课件" :visible.sync="dialogChangeCoursewareform" width="80%" @close='closeDialogChangeCoursewareform'>
      <el-form label-width="80px" class="mrauto" style="max-width:600px">
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="题目:">
              <el-input v-model="changeCoursewareform.title"></el-input>
            </el-form-item>
            <el-form-item label="编目:">
              <el-select v-model="changeCoursewareform.bid" clearable placeholder="编目信息" class="pull-left" value="changeCoursewareform.bid">
                <el-option v-for="item in bidInfo.list" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="视频地址:">
              <el-input v-model="changeCoursewareform.video"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-upload class="avatar-uploader" action="" ref="upload" :show-file-list="false" :auto-upload="false" :on-change="uploaderImg">
              <img v-if="changeCoursewareform.imgSrc" :src="changeCoursewareform.imgSrc" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注：">
              <el-input v-model="changeCoursewareform.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleAddCourseware('change')">确 定</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {
      contentShow: "unRelease",
      dialogChangeCoursewareform: false,
      boxOptions: [{
        value: '123',
        label: '直播盒子xxxxxx'
      }, {
        value: '3333',
        label: '直播盒子xxxxxx'
      }, {
        value: '4444',
        label: '直播盒子xxxxxx'
      }],
      weekOptions: [{
        value: "1",
        label: "周一"
      }, {
        value: "2",
        label: "周一"
      }, {
        value: "3",
        label: "周一"
      }, {
        value: "4",
        label: "周一"
      }, {
        value: "5",
        label: "周一"
      }, {
        value: "6",
        label: "周一"
      }, {
        value: "7",
        label: "周一"
      }, ],
      cycleOptions: [{
        value: '1',
        label: '每周'
      }, {
        value: '2',
        label: '每天'
      }, {
        value: '3',
        label: '一次'
      }],
      selectBoxVal: '', //selecte 选择结果
      selectsWeekVal: '',
      sweekTimeVal: '',
      selecteWeekVal: '',
      eweekTimeVal: '',
      selectCycleVal: '',
      addCoursewareform: {
        title: "",
        video: "",
        remark: "",
        bid: "",
        image: ""
      },
      changeCoursewareform: {
        title: "",
        video: "",
        remark: "",
        bid: "",
        image: "",
        id: ""
      },
      imgUpload: "", //预览图片
      gradeInfo: { //年级信息
        list: [],
        bid: "",
      },
      CoursewareInfo: { //学科信息
        list: [],
        bid: "",
      },
      textbookInfo: { //教材信息
        list: [],
        bid: "",
      },
      typeInfo: { //授课类型信息
        list: [],
        bid: "",
      },
      bidInfo: { //编目信息
        list: [],
      },
      releaseInfo: { //已发布信息
        list: [],
        curr: 1,
        total: 0
      },
      unReleaseInfo: { //未发布信息
        list: [],
        curr: 1,
        total: 0
      }
    };
  },
  computed: {
    userInfo() {
      var d = USERINFO || {};
      return d;
    },
    pageSize() {
      var p = this.$store.state.pageSize;
      return p;
    }
  },
  methods: {
    filterStatus(value, row) {
      return row.status == value;
    },
    resetForm() {
      this.addCoursewareform = {
        title: "",
        video: "",
        remark: "",
        bid: "",
        image: ""
      };
      this.imgUpload = ""; //预览图片
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
      if (this.dialogChangeCoursewareform) {
        //修改的时候
        this.changeCoursewareform.imgSrc = file.url;
        this.changeCoursewareform.image = file.raw;

      } else {
        //添加的时候
        this.imgUpload = file.url;
        this.addCoursewareform.image = file.raw;
      }


    },
    /*
    翻页
     */
    pageToUnRelease(page) {
      this.tablePage = page;
      this.getCourseware("0", page);
    },
    pageToRelease(page) {
      this.tablePage = page;
      this.getCourseware("1", page);
    },
    /**
     * 编目列表
     * @return {[type]} [description]
     */
    showAddBid() {
      this.contentShow = "addBid";
      this.getGradeList();
      this.getCoursewareList();
      this.getTextbookList();
      this.getTypeList();
    },
    /**
     * 年级列表接口
     * @return {[type]} [description]
     */
    getGradeList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.gradeInfo.list = d.list;
      };
      this.$store.commit('getGradeList', { params: params, sucf: sucf });
    },
    /**
     * 学科列表
     * @return {[type]} [description]
     */
    getCoursewareList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.CoursewareInfo.list = d.list;
      };
      this.$store.commit('getCoursewareList', { params: params, sucf: sucf });
    },
    /**
     * 教材列表
     * @return {[type]} [description]
     */
    getTextbookList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.textbookInfo.list = d.list;
      };
      this.$store.commit('getTextbookList', { params: params, sucf: sucf });
    },
    /**
     * 授课类型列表
     * @return {[type]} [description]
     */
    getTypeList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.typeInfo.list = d.list;
      };
      this.$store.commit('getTypeList', { params: params, sucf: sucf });
    },
    /**
     * 添加编目
     */
    addBid() {
      // gid: 年级ID
      // sid: 科目ID
      // bid: 教材ID
      // tid: 类型ID
      var that = this;
      var params = {
        gid: this.gradeInfo.bid,
        sid: this.CoursewareInfo.bid,
        bid: this.textbookInfo.bid,
        tid: this.typeInfo.bid
      };

      var sucf = function(d) {
        that.$message({ type: 'success', message: "添加成功" });
      };
      this.$store.commit('addBid', { params: params, sucf: sucf })
    },
    /**
     * 添加课件
     */
    showAddCourseware() {

      this.contentShow = 'addCourseware';

    },
    /**
     * 获取编目列表
     * @return {[type]} [description]
     */
    getBidList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.bidInfo.list = d.list;
      };
      this.$store.commit('getBid', { params: params, sucf: sucf });
    },
    /**
     * 添加课件
     */
    handleAddCourseware(type) {
      // title: 标题,
      // bid: 编目ID,
      // video: 视频地址,
      // remark: 备注,
      // image: 上传封面图片,
      // id: 课件ID(编辑用),

      var that = this;
      var formData = new FormData;
      var params = this.addCoursewareform;
      var msg = "添加成功";
      if (type == "change") {
        //修改课件
        params = this.changeCoursewareform;
        formData.append('id', params.id);
        msg = "修改成功";
      }
      var sucf = function(d) {
        that.$message({ type: 'success', message: msg });

        if (that.contentShow == 'release') {
          that.showRelease();
        } else {
          that.showUnRelease();
        }
      };


      formData.append('title', params.title);
      formData.append('bid', params.bid);
      formData.append('video', params.video);
      formData.append('remark', params.remark);
      formData.append('image', params.image);
      this.$store.commit('addCourseware', { params: formData, sucf: sucf });
    },
    /**
     * 显示已发布
     * @return {[type]} [description]
     */
    showRelease() {
      this.contentShow = 'release';
      this.getCourseware("1");
    },
    /**
     * 显示未发布
     * @return {[type]} [description]
     */
    showUnRelease() {
      this.contentShow = 'unRelease';
      this.getCourseware("0");
    },
    /**
     * 获取课件列表
     * stat:1 release 0 unrelease
     * @return {[type]} [description]
     */
    getCourseware(type, page) {
      var that = this;
      var stat = (type == 1) ? 1 : 0;
      var _page = page || 1;
      var params = {
        num: that.pageSize,
        page: page,
        stat: stat
      };
      var sucf = function(d) {
        if (stat) {
          //已发布
          that.releaseInfo.list = d.list;
          that.releaseInfo.curr = parseInt(d.curr);
          that.releaseInfo.total = parseInt(d.total);
        } else {
          that.unReleaseInfo.list = d.list;
          that.unReleaseInfo.curr = parseInt(d.curr);
          that.unReleaseInfo.total = parseInt(d.total);
        }
      };
      this.$store.commit('getCourseware', { params: params, sucf: sucf });
    },
    /**
     * 发布课件
     * @return {[type]} [description]
     */
    releaseCourseware(_id) {
      var id = _id || "";
      var that = this;
      var params = {
        id: id,
        stat: 1
      };
      var sucf=function(d){
        that.$message({type:'success',messge:"发布成功！"});
        that.showRelease();
      }
      this.$store.commit('changeCoursewareStatus', { params: params,sucf:sucf });
    },
    /**
     * 修改课件
     * @param  {[type]} opt [description]
     * @return {[type]}     [description]
     */
    handelChangeCoursewareform(opt) {
      this.dialogChangeCoursewareform = true;
      this.changeCoursewareform = {
        title: opt.title,
        video: opt.video,
        remark: opt.remark,
        bid: opt.bmid,
        image: opt.image,
        imgSrc: opt.image,
        id: opt.id
      };
    },
    /**
     * 关闭修改课件弹窗
     * @return {[type]} [description]
     */
    closeDialogChangeCoursewareform() {
      this.changeCoursewareform = {
        title: "",
        video: "",
        remark: "",
        bid: "",
        image: "",
        id: "",
        imgSrc: ""
      };
    },

  },
  components: {

  },
  created() {

  },
  mounted() {
    this.getBidList();
    this.getCourseware("0");
  }

};

</script>
