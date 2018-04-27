/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';
import { Message } from 'element-ui';
import { MessageBox } from 'element-ui';
Vue.use(Vuex);
var qs = require('qs');
var invoke = function(params, sucf, errf, config) {
  //通信接口
  var _params,
    _sucf = sucf || function(d) {
      console.log("success", d);
    },
    _errf = errf || function(d) {
      console.log("error", d);
      Message.error(d);
    },
    _config = config || "",
    _url = URL_dev.jys;
  if (params) {
    //添加TOKEN验证
    params.token = TOKEN;
    params.userid = USERINFO.uid;
    _params = qs.stringify(params);
  }
  if (_config) {
    //form上传时 parmas为formdata
    _params = params;
  }

  // console.log("config",_config)
  axios.post(_url, _params, _config).then(function(result) {
    var data = result.data;
    if (data.status == 1) {
      _sucf(data.data);
    } else {
      _errf(data.msg);
    }
  }).catch(function(err) {
    _errf(err);
    _errf(err);
  });
};
var authorize = function(path, params, sucf, errf, config) {
  //授权接口
  var _sucf = sucf || function(d) {
      console.log("success", d);
    },
    _errf = errf || function(d) {
      console.log("error", d);
      Message.error(d);
    },
    _params = params ? qs.stringify(params) : "",
    _config = config || "",
    _url = URL_dev.yjw + path;
  if (_config) {
    //form上传时 parmas为formdata
    _params = params;
  }
  axios.post(_url, _params, _config).then(function(result) {
    var data = result.data;
    if (data.status == 1) {
      _sucf(data.data);
    } else {
      _errf(data.msg);
    }
  }).catch(function(err) {
    _errf(err);
  });
};



const state = {
  userInfo: {},
  pageSize: 5, //每页包含数据
};

const getters = {};

const mutations = {
  /**
   * 用户登陆
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  login(state, opt) {
    var params = opt.params;
    authorize('c=Oauth&a=authorize', params, function(d) {
      state.userInfo = d;
      //设置全局变量TOKEN为d.oauthtakensecret
      TOKEN = d.oauthtakensecret;
      USERINFO = d;
      //存入localstorage
      localStorage.setItem('userinfo', JSON.stringify(USERINFO));
      localStorage.setItem('oauthtakensecret', TOKEN);
      var utypeid = d.utypeid;

      switch (utypeid) {
        case '5':
          //学校管理员
          router.push({ path: 'school' });
          break;
        case '6':
          //教师管理员
          router.push({ path: 'teacher' });
          break;
        case '7':
          //学生
          break;
        case '8':
          //家长
          break;
        default:
          //1平台管理员,2省管理员,3市管理员，4区县管理员
          //都用通用型后台
          router.push({ path: 'common' });
          break;
      }
    });
  },
  /**
   * 用户推出
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  logout(state, opt) {
    var params = opt.params;
    router.push({ path: 'login' });
    authorize('c=Oauth&a=logout', params, function(d) {
      console.log(d);
      //退出成功 跳转到登陆页

    });
  },
  /**
   * 获取指定条件的用户
   * utype(用户类型；6教师、7学生、8家长)
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getUser(state, opt) {
    var params = opt.params;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.uid = USERINFO.uid;
    params.token = TOKEN;
    // params.pagecount = "5";
    authorize('c=User&a=getuser', params, sucf, errf);
  },
  /**
   * 添加用户 form提交
   * 6教师、7学生、8家长
   * @param {[type]} state [description]
   * @param {[type]} opt   [description]
   */
  addUser(state, opt) {
    var formData = opt.params;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    var config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    formData.append('uid', USERINFO.uid);
    formData.append('token', TOKEN);
    authorize('c=User&a=adduser', formData, sucf, errf, config);
  },
  /**
   * 删除用户
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  delUser(state, opt) {
    var params = opt.params;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.uid = USERINFO.uid;
    params.token = TOKEN;
    authorize('c=User&a=deleteuser', params, sucf, errf);
  },
  /**
   * 删除确认控件
   * sucf成功回调 errf错误回调
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  delConfirm(state, _opt) {
    var opt = _opt || {};
    var sucf = opt.sucf || function() {
      Message({
        type: 'success',
        message: '删除成功!'
      });
    };
    var errf = opt.errf || function() {
      Message({
        type: 'info',
        message: '已取消删除'
      });
    };
    MessageBox.confirm('此操作将永久删除该信息, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(sucf).catch(errf);
  },
  /**
   * 年级列表接口
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getGradeList(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getGradeList;
    invoke(params, sucf, errf);
  },
  /**
   * 学科列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getCoursewareList(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getCoursewareList;
    invoke(params, sucf, errf);
  },
  /**
   * 教材列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getTextbookList(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getTextbookList;
    invoke(params, sucf, errf);
  },
  /**
   * 授课类型列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getTypeList(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getTypeList;
    invoke(params, sucf, errf);
  },
    /**
   * 年级列表接口
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getGradeInfo(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getGradeInfo;
    invoke(params, sucf, errf);
  },
  /**
   * 学科列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getCoursewareInfo(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getCoursewareInfo;
    invoke(params, sucf, errf);
  },
  /**
   * 教材列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getTextbookInfo(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getTextbookInfo;
    invoke(params, sucf, errf);
  },
  /**
   * 授课类型列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getTypeInfo(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getTypeInfo;
    invoke(params, sucf, errf);
  },
  /**
   * 添加编目信息
   * @param {[type]} state [description]
   * @param {[type]} opt   [description]
   */
  addBid(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.addBid;
    invoke(params, sucf, errf);
  },
  /**
   * 获取编目LIST
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getBid(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getBid;
    invoke(params, sucf, errf);
  },
  /**
   * 添加课件
   * @param {[type]} state [description]
   * @param {[type]} opt   [description]
   */
  addCourseware(state, opt) {
    var formData = opt.params;
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    var config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    formData.append('userid', USERINFO.uid);
    formData.append('token', TOKEN);
    formData.append('m', PARAMS.addCourseware);
    invoke(formData, sucf, errf, config);
  },
  /**
   * 获取课件列表
   * @param  {[type]} state [description]
   * @param  {[type]} opt   [description]
   * @return {[type]}       [description]
   */
  getCourseware(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.getCourseware;
    invoke(params, sucf, errf);
  },
/**
 * 修改课件状态
 * 1 发布 0 未发布 2 上级修改 10 审核通过 11 审核不过 40 下架
 * @param  {[type]} state [description]
 * @param  {[type]} opt   [description]
 * @return {[type]}       [description]
 */
  changeCoursewareStatus(state, opt) {
    var params = opt.params || {};
    var sucf = opt.sucf || "";
    var errf = opt.errf || "";
    params.m = PARAMS.changeCoursewareStatus;
    invoke(params, sucf, errf);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
