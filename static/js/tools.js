var URL_dev = {
  // yjw: 'http://192.168.58.14/jiaoyumeizi/admin.php',
  yjw: 'http://edu.xiaomaizhibo.com/jiaoyumeizi/admin.php?',
  jys: 'http://edu.xiaomaizhibo.com/teaching/',
  imghost: "http://edu.xiaomaizhibo.com/jiaoyumeizi",
};
var PARAMS = {
  getGradeList: 10051, //年纪列表接口
  getCoursewareList: 10053, //学科列表
  getTextbookList: 10055, //教材列表
  getTypeList: 10057, //授课类型列表
  addBid: 10060, //添加编目信息
  getBid: 10061, //编目信息列表
  addCourseware: 10070, //添加课件
  getCourseware: 10071, //课件列表
  changeCoursewareStatus: 10073, //修改课件状态
  getGradeInfo: 10080, //年纪接口
  getCoursewareInfo: 10081, //学科列表
  getTextbookInfo: 10082, //教材列表
  getTypeInfo: 10083, //授课类型列表
};


var TOKEN = localStorage.getItem("oauthtakensecret") || "";

var USERINFO = localStorage.getItem("userinfo") || '{}';
USERINFO = JSON.parse(USERINFO);




/**
 * 本地文件上传图片并显示
 * @param  {[对象]} e   [input元素]
 * @param  {[对象]} tar [需要显示的img元素]
 * @return {[type]}     [description]
 */
function uploaderImg(e, tar) {
  var src, url = window.URL || window.webkitURL || window.mozURL,
    files = e.target.files;
  for (var i = 0, len = files.length; i < len; ++i) {
    var file = files[i];
    if (url) {
      src = url.createObjectURL(file);
    } else {
      src = e.target.result;
    }
    img.src = src;
  }
}
