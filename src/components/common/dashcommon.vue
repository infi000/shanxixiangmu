<template>
  <el-main>
  <el-row>
      <el-col :span="18"> <div class="text-22 text-left">欢迎<span class="text-24 text-blue">{{userInfo.uname||userInfo.uname}}</span>登录后台，平台共拥有XX课件。</div>
    <div class="text-22 text-left">注册学校XXXX，注册教师XXXX，注册学生XXXX。</div></el-col>
      <el-col :span="6"><el-button size="small" :type="contentShow=='addBid'?'primary':'default'"  @click="getBidMemberList" disabled>添加编目信息</el-button></el-col>
  </el-row>


    <div class="line"></div>
    <el-row v-if="contentShow==''">
      <el-col :span="24" class="commonTableBox ">
        <div class="text-left" style="font-size: 18px;padding:20px 5%;">名师授课
        </div>
        <template>
          <el-table :data="tableData" style="width: 90%;margin:0 auto;" border :row-class-name="tableRowClassName">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="课件预览图" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.img" alt="">
              </template>
            </el-table-column>
            <el-table-column prop="title" label="课件名称" width="180">
            </el-table-column>
            <el-table-column prop="teacher" label="授课人" width="180">
            </el-table-column>
            <el-table-column label="发布状态" :filters="[{text:'内部浏览',value:'内部浏览'},{text:'发布到学生',value:'发布到学生'},{text:'发布到区县委',value:'发布到区县委'}]" :filter-method="filterStatus" prop="status">
              <template slot-scope="scope">
                <span class="text-blue">{{scope.row.status}}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-pagination background layout="prev, pager, next" :total="1000" class="mrt20 mrtb20">
        </el-pagination>
      </el-col>
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
            <el-select v-model="subjectInfo.bid" clearable placeholder="学科列表">
              <el-option v-for="item in subjectInfo.list" :key="item.id" :label="item.name" :value="item.id">
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
            <el-button type="default" @click="contentShow=''">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
  </el-main>
</template>
<script>
/*jshint esversion: 6 */
export default {
  props: [],
  data() {
    return {
      contentShow: "",
      tableData: [{
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "内部浏览",
        }, {
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "发布到学生",
        }, {
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "发布到区县委",
        }, {
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "内部浏览",
        }, {
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "发布到学生",
        },
        {
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "发布到区县委",
        }, {
          img: "http://www.xiaomaizhibo.com/img/logo.png",
          title: "课件名称123456",
          teacher: "王老师",
          status: "内部浏览",
        }
      ],
      /**添加编目所需要的变量**/
      gradeInfo: { //年级信息
        list: [],
        bid: "",
      },
      subjectInfo: { //学科信息
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
      /**添加编目所需要的变量 end**/
    }
  },
  computed: {
    userInfo() {
      var d = USERINFO || {};
      return d;
    }
  },
  methods: {
    filterStatus(value, row) {
      return row.status == value;
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'warning-row';
      }
      return '';
    },
    /**
     * 编目列表
     * @return {[type]} [description]
     */
    getBidMemberList() {
      this.contentShow = "addBid";
      this.getGradeList();
      this.getSubjectList();
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
    getSubjectList() {
      var that = this;
      var params = {
        num: 100,
        page: 1
      };
      var sucf = function(d) {
        that.subjectInfo.list = d.list;
      };
      this.$store.commit('getSubjectList', { params: params, sucf: sucf });
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
      // cid: 类型ID
      var params = {
        gid: this.gradeInfo.bid,
        sid: this.subjectInfo.bid,
        bid: this.textbookInfo.bid,
        tid: this.typeInfo.bid
      };
      var that = this;
      var sucf = function(d) {
        that.$message({ message: "添加成功！", type: "success" });
      }
      this.$store.commit('addBid', { params: params, sucf: sucf });

    }
  },
  components: {},
  created() {

  },
  mounted() {

  }

};

</script>
<style scoped>
.el-main {
  padding: 30px 100px;
}

.line {
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 20px 0;
}

.commonTableBox {

  border: 1px solid #ccc;
}


.commonTableBox .el-table img {
  width: 100%;
}

</style>
