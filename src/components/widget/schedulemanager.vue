<template>
  <el-row>
    <el-col :span="24" class="commonTableBox " v-if="!contentShow">
      <div class="text-left" style="font-size: 18px;padding:20px 5%;">课表列表
        <el-button type="primary" class="pull-right" @click="contentShow='edit'" size="small">录入新课表</el-button>
      </div>
      <template>
        <el-table :data="tableData" style="width: 90%;margin:0 auto;" border>
          <el-table-column prop="id" label="课程ID">
          </el-table-column>
          <el-table-column prop="name" label="名称">
          </el-table-column>
          <el-table-column prop="stime" label="开始日期">
          </el-table-column>
          <el-table-column prop="etime" label="结束日期">
          </el-table-column>
          <el-table-column prop="cycle" label="周期">
          </el-table-column>
        </el-table>
      </template>
      <el-pagination background layout="prev, pager, next" :total="1000" class="mrt20 mrtb20">
      </el-pagination>
    </el-col>
    <el-col v-else>
      <div class="border-blue mrauto pd20" style="margin-top: 130px">
        <h2 class="text-left">编辑/录入新课表 <el-button type="primary" class="pull-right" size="small" @click="dialogVisible = true">录入直播源</el-button></h2>
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
        <el-dialog :visible.sync="dialogVisible" width="90%">
          <h2 slot="title" class="text-left">录入直播源</h2>
          <h3 class="text-left">请按照以下步骤操作</h3>
          <div class="line"></div>

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
      contentShow: "",
      tableData: [{
        id: "1asdfasfasdf",
        name: "课件名称1234",
        stime: "xxxxx",
        etime: "xxxxx",
        cycle: '一周'
      }, ],
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
      selectCycleVal:'',
      // stimeVal: '', //开始时间
      // etimeVal: '', //开始时间
      dialogVisible: false
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
