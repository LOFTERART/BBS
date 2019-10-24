//公共js，主要做表单验证，以及基本方法封装
const utils = {
  isNullOrEmpty: function(value) {
    //是否为空
    return (value === null || value === '' || value === undefined) ? true : false;
  },
  trim: function(value) {
    //去空格
    return value.replace(/(^\s*)|(\s*$)/g, "");
  },
  isMobile: function(value) {
    //是否为手机号
    return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
  },
  isFloat: function(value) {
    //金额，只允许保留两位小数
    return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
  },
  isNum: function(value) {
    //是否全为数字
    return /^[0-9]+$/.test(value);
  },
  formatNum: function(num) {
    //格式化手机号码
    if (utils.isMobile(num)) {
      num = num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
    return num;
  },

  toast: function(text, duration, success) {
    wx.showToast({
      title: text,
      icon: success ? 'success' : 'none',
      duration: duration || 2000
    })
  },
  preventMultiple: function(fn, gapTime) {
    if (gapTime == null || gapTime == undefined) {
      gapTime = 200;
    }
    let lastTime = null;
    return function() {
      let now = +new Date();
      if (!lastTime || now - lastTime > gapTime) {
        fn.apply(this, arguments);
        lastTime = now;
      }
    }
  },

}




module.exports = {
  isNullOrEmpty: utils.isNullOrEmpty,
  trim: utils.trim,
  isMobile: utils.isMobile,
  isFloat: utils.isFloat,
  isNum: utils.isNum,
  interfaceUrl: utils.interfaceUrl,
  toast: utils.toast,
  request: utils.request,
  uploadFile: utils.uploadFile,
  formatNum: utils.formatNum,

}