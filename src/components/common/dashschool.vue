<template>
  <el-main>
    <div class="text-22 text-left">欢迎<span class="text-24 text-blue">{{userInfo.realname||userInfo.uname}}</span>登录后台，平台共拥有XX课件。</div>
    <div class="text-22 text-left">注册学校XXXX，注册教师XXXX，注册学生XXXX。
      <el-row class="pull-right">
        <el-button size="small" :type="contentShow=='schedule'?'primary':'default'" @click="contentShow='schedule'">课表管理</el-button>
        <el-button size="small" :type="contentShow=='student'?'primary':'default'" @click="contentShow='student'">学生管理</el-button>
        <el-button size="small" :type="contentShow=='teacher'?'primary':'default'" @click="contentShow='teacher'">教师管理</el-button>
      </el-row>
    </div>
    <div class="line"></div>
    <el-row v-if="!contentShow">
      <el-col :span="24" class="commonTableBox ">
        <div class="text-left" style="font-size: 18px;padding:20px 5%;">名师授课</div>
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
    <dom-teacher v-if="contentShow=='teacher'"></dom-teacher>
    <dom-student v-if="contentShow=='student'"></dom-student>
    <dom-schedule v-if="contentShow=='schedule'"></dom-schedule>
  </el-main>
</template>
<script>
/*jshint esversion: 6 */
import domTeacher from "@/components/widget/teachermanager.vue";
import domStudent from "@/components/widget/studentmanager.vue";
import domSchedule from "@/components/widget/schedulemanager.vue";
export default {
  props: [],
  data() {
    return {
      contentShow: "", //当前显示内容
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
      ]
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

  },
  components: {
    domTeacher,
    domStudent,
    domSchedule
  },
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

</style>
