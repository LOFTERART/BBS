(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var hasOwn = {}.hasOwnProperty;

var utils = module.exports = {

  /**
   * 对象转换成 query string
   * @param object data  待转对象
   * @param string channel  渠道
   * @param boolean urlencode  是否需要 urlencode
   *
   * @return string query string
   */
  stringifyData: function (data, channel, urlencode) {
    if (typeof urlencode == 'undefined') {
      urlencode = false;
    }
    var output = [];
    for (var i in data) {
      if (!hasOwn.call(data, i) || typeof data[i] === 'function') {
        continue;
      }
      if (channel == 'bfb_wap' && i == 'url') {
        continue;
      }
      if (channel == 'yeepay_wap' && i == 'mode') {
        continue;
      }
      if (i == 'channel_url') {
        continue;
      }
      output.push(i + '=' +
        (urlencode ? encodeURIComponent(data[i]) : data[i]));
    }
    return output.join('&');
  },

  /**
   * 网络请求
   * @param string url
   * @param string method  请求方式, POST, GET ...
   * @param object requestData  请求数据
   * @param function successCallback  成功回调 (data, statusCode, xhr)
   * @param function errorCallback  错误回调 (xhr, statusCode, error)
   */
  request: function (url, method, requestData,
    successCallback, errorCallback, headers) {
    if (typeof XMLHttpRequest === 'undefined') {
      console.log('Function XMLHttpRequest is undefined.');
      return;
    }
    var xhr = new XMLHttpRequest();
    if (typeof xhr.timeout !== 'undefined') {
      xhr.timeout = 6000;
    }
    method = method.toUpperCase();

    if (method === 'GET' && typeof requestData === 'object' && requestData) {
      url += '?' + utils.stringifyData(requestData, '', true);
    }
    xhr.open(method, url, true);
    if (typeof headers !== 'undefined') {
      for (var k in headers) {
        if (hasOwn.call(headers, k)) {
          xhr.setRequestHeader(k, headers[k]);
        }
      }
    }
    if (method === 'POST') {
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(JSON.stringify(requestData));
    } else {
      xhr.send();
    }
    if (typeof successCallback == 'undefined') {
      successCallback = function () {};
    }
    if (typeof errorCallback == 'undefined') {
      errorCallback = function () {};
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        successCallback(xhr.responseText, xhr.status, xhr);
      }
    };
    xhr.onerror = function (e) {
      errorCallback(xhr, 0, e);
    };
  },

  /**
   * 表单提交
   * @param string url
   * @param string method  请求方式, POST, GET ...
   * @param object params  请求数据
   */
  formSubmit: function (url, method, params) {
    if (typeof window === 'undefined') {
      console.log('Not a browser, form submit url: ' + url);
      return;
    }
    var form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', url);

    for (var key in params) {
      if (hasOwn.call(params, key)) {
        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);
        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  },

  randomString: function (length) {
    if (typeof length == 'undefined') {
      length = 32;
    }
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var maxPos = chars.length;
    var str = '';
    for (var i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * maxPos));
    }

    return str;
  },

  redirectTo: function (url) {
    if (typeof window === 'undefined') {
      console.log('Not a browser, redirect url: ' + url);
      return;
    }
    window.location.href = url;
  },

  inWeixin: function () {
    if (typeof navigator === 'undefined') {
      return false;
    }
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') !== -1;
  },

  inAlipay: function () {
    if (typeof navigator === 'undefined') {
      return false;
    }
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('alipayclient') !== -1;
  },

  documentReady: function (fn) {
    if (typeof document === 'undefined') {
      fn();
      return;
    }
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  },

  loadUrlJs: function (sid, jsurl, callback) {
    var nodeHead = document.getElementsByTagName('head')[0];
    var nodeScript = null;
    if (document.getElementById(sid) == null) {
      nodeScript = document.createElement('script');
      nodeScript.setAttribute('type', 'text/javascript');
      nodeScript.setAttribute('src', jsurl);
      nodeScript.setAttribute('id', sid);
      nodeScript.async = true;
      if (callback != null) {
        nodeScript.onload = nodeScript.onreadystatechange = function () {
          if (nodeScript.ready) {
            return false;
          }

          if (!nodeScript.readyState || nodeScript.readyState == 'loaded'
              || nodeScript.readyState == 'complete') {
            nodeScript.ready = true;
            callback();
          }
        };
      }
      nodeHead.appendChild(nodeScript);
    } else {
      if (callback != null) {
        callback();
      }
    }
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var payment_elements = __webpack_require__(8);
module.exports = {

  userCallback: undefined,

  innerCallback: function(result, err) {
    if (typeof this.userCallback === 'function') {
      if (typeof err === 'undefined') {
        err = this.error();
      }
      this.userCallback(result, err);
      this.userCallback = undefined;
      payment_elements.clear();
    }
  },

  error: function(msg, extra) {
    msg = (typeof msg === 'undefined') ? '' : msg;
    extra = (typeof extra === 'undefined') ? '' : extra;
    return {
      msg: msg,
      extra: extra
    };
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = {}.hasOwnProperty;
var mods = {};
module.exports = mods;

mods.channels = {
  alipay_pc_direct: __webpack_require__(14),
  alipay_wap: __webpack_require__(15),
  bfb_wap: __webpack_require__(16),
  cmb_wallet: __webpack_require__(17),
  cp_b2b: __webpack_require__(18),
  fqlpay_qr: __webpack_require__(19),
  fqlpay_wap: __webpack_require__(20),
  isv_wap: __webpack_require__(21),
  jdpay_wap: __webpack_require__(22),
  qpay_pub: __webpack_require__(23),
  upacp_pc: __webpack_require__(24),
  upacp_wap: __webpack_require__(25),
  wx_lite: __webpack_require__(26),
  wx_pub: __webpack_require__(27),
  wx_wap: __webpack_require__(28),
  yeepay_wap: __webpack_require__(29)
};

mods.extras = {
  ap: __webpack_require__(30)
};

mods.getChannelModule = function(channel) {
  if (hasOwn.call(mods.channels, channel)) {
    return mods.channels[channel];
  }
  return undefined;
};

mods.getExtraModule = function(name) {
  if (hasOwn.call(mods.extras, name)) {
    return mods.extras[name];
  }
  return undefined;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var callbacks = __webpack_require__(1);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    var targetURL;
    if (typeof credential === 'string') {
      targetURL = credential;
    } else if (hasOwn.call(credential, 'url')) {
      targetURL = credential.url;
    } else {
      callbacks.innerCallback('fail', callbacks.error('invalid_credential',
        'credential format is incorrect'));
      return;
    }
    utils.redirectTo(targetURL);
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cookieStorage = exports.pingpp = exports.pageLogin = exports.getUrl = exports.is = exports.config = exports.sandBox = undefined;

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _sandBox = __webpack_require__(7);

var _utils = __webpack_require__(10);

var _pingppJs = __webpack_require__(11);

var _pingppJs2 = _interopRequireDefault(_pingppJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sandBox = _sandBox.sandBox;
exports.config = _config2.default;
exports.is = _utils.is;
exports.getUrl = _utils.getUrl;
exports.pageLogin = _utils.pageLogin;
exports.pingpp = _pingppJs2.default;
exports.cookieStorage = _utils.cookieStorage;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    BRAND: {
        name: '明月艺族',
        logo: 'http://www.mingyue.musemore.art/storage/logo.jpg'
    },
    GLOBAL: {
        // baseUrl:  true ? 'https://demo-open-admin.ibrand.cc/' : 'https://demo-open-admin.ibrand.cc/' // 运行时自动替换变量
        baseUrl:  true ? 'https://www.mingyue.musemore.art/' : 'https://www.mingyue.musemore.art/' // 运行时自动替换变量
    },
    PACKAGES: {
        author: true // 是否显示技术支持
    }

};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sandBox = undefined;

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _myapp = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sandBox = exports.sandBox = {
    get: function get(_ref) {
        var api = _ref.api,
            data = _ref.data,
            header = _ref.header;


        return new Promise(function (resolve, reject) {

            wx.request({
                url: '' + _config2.default.GLOBAL.baseUrl + api,
                header: header,
                data: data,
                method: 'GET',
                success: function success(res) {
                    console.log('请求的url','' + _config2.default.GLOBAL.baseUrl + api);
                    console.log('传递参数',data);
                    console.log('传递header',header);
                    console.log('请求方式',"GET");
                    console.log('返回数据',res.data);

                    sandBox.error(res).then(function () {
                        wx.stopPullDownRefresh();
                        resolve(res);
                    });
                },
                fail: function fail(rej) {

                    reject(rej);
                }
            });
        });
    },
    post: function post(_ref2) {
        var api = _ref2.api,
            data = _ref2.data,
            header = _ref2.header;

        return new Promise(function (resolve, reject) {

            wx.request({
                url: '' + _config2.default.GLOBAL.baseUrl + api,
                data: data,
                header: header,
                method: 'POST',
                success: function success(res) {
                    console.log('请求的url','' + _config2.default.GLOBAL.baseUrl + api);
                    console.log('传递参数',data);
                    console.log('传递header',header);
                    console.log('请求方式',"GET");
                    console.log('返回数据',res.data);
                    sandBox.error(res).then(function () {
                        wx.stopPullDownRefresh();
                        resolve(res);
                    });
                },
                fail: function fail(rej) {
                    reject(rej);
                }
            });
        });
    },
    error: function error(res) {
        return new Promise(function (resolve, reject) {

            var url = (0, _myapp.getUrl)();
            if (res.data.message == 'Unauthenticated.') {

                wx.removeStorageSync('user_token');
                wx.showModal({
                    content: '请重新登录',
                    duration: 1500,
                    showCancel: false,
                    success: function success(res) {
                        if (res.confirm) {
                            wx.navigateTo({
                                url: '/pages/user/register/register?url=' + url
                            });
                            return;
                        }
                    },
                    cancel: function cancel() {
                        wx.navigateTo({
                            url: '/pages/user/register/register?url=' + url
                        });
                        return;
                    }
                });
                reject();
                return;
            }

            resolve();
            return;
        });
    },
    ajax: function ajax(_ref3) {
        var api = _ref3.api,
            data = _ref3.data,
            method = _ref3.method,
            header = _ref3.header;

        return new Promise(function (resolve, reject) {
            wx.request({
                url: '' + _config2.default.GLOBAL.baseUrl + api,
                data: data,
                header: header,
                method: method.toUpperCase(),
                success: function success(res) {

                    sandBox.error(res).then(function () {
                        resolve(res);
                    });
                },
                fail: function fail(rej) {
                    reject(rej);
                }
            });
        });
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by dong on 2016/12/30.
 */

var callbacks = __webpack_require__(1);
var hasOwn = {}.hasOwnProperty;

module.exports = {
  id: null,
  or_id: null,
  channel: null,
  app: null,
  credential: {},
  extra: null,
  livemode: null,
  order_no: null,
  time_expire: null,

  init: function (charge_or_order) {
    var charge;
    if (typeof charge_or_order === 'string') {
      try {
        charge = JSON.parse(charge_or_order);
      } catch (err) {
        callbacks.innerCallback('fail',
          callbacks.error('json_decode_fail', err));
        return;
      }
    } else {
      charge = charge_or_order;
    }

    if (typeof charge === 'undefined') {
      callbacks.innerCallback('fail', callbacks.error('json_decode_fail'));
      return;
    }

    if (hasOwn.call(charge, 'object') && charge.object == 'order') {
      if(hasOwn.call(charge, 'charge') && charge.charge != null) {
        charge.or_id = charge.id;
        charge.id = charge.charge;
        charge.order_no = charge.merchant_order_no;
        var charge_essentials = charge.charge_essentials;
        charge.channel = charge_essentials.channel;
        charge.credential = charge_essentials.credential;
        charge.extra = charge_essentials.extra;
      } else if(hasOwn.call(charge, 'charges') && charge.charges != null) {
        charge = charge.charges.data[0];
      }
    } else if(hasOwn.call(charge, 'object') && charge.object == 'recharge') {
      charge = charge.charge;
    }

    for (var key in this) {
      if (hasOwn.call(charge, key)) {
        this[key] = charge[key];
      }
    }
    return this;
  },

  clear: function () {
    for (var key in this) {
      if (typeof this[key] !== 'function') {
        this[key] = null;
      }
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var stash = __webpack_require__(2);
var md5 = __webpack_require__(31);

var collection = {
  seperator: '###',
  limit: 1,
  report_url: 'https://statistics.pingxx.com/one_stats',
  timeout: 100
};
var getParam = function(str, param) {
  var reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)', 'i');
  var r = str.substr(0).match(reg);
  if (r !== null) return unescape(r[2]);
  return null;
};
var getUserAgent = function() {
  return navigator.userAgent;
};
var getHost = function() {
  return window.location.host;
};

collection.store = function(obj) {
  if (typeof localStorage === 'undefined' || localStorage === null) return;
  var _this = this;
  var reportData = {};
  reportData.app_id = obj.app_id || stash.app_id || 'app_not_defined';
  reportData.ch_id = obj.ch_id || '';
  reportData.channel = obj.channel || '';
  reportData.type = obj.type || '';
  reportData.user_agent = getUserAgent();
  reportData.host = getHost();
  reportData.time = new Date().getTime();
  reportData.puid = stash.puid;

  var reportStr = 'app_id=' + reportData.app_id +
    '&channel=' + reportData.channel + '&ch_id=' + reportData.ch_id +
    '&host=' + reportData.host + '&time=' + reportData.time +
    '&type=' + reportData.type + '&user_agent=' + reportData.user_agent +
    '&puid=' + reportData.puid;

  var statsToSave = reportStr;
  if (localStorage.getItem('PPP_ONE_STATS') !== null &&
    localStorage.getItem('PPP_ONE_STATS').length !== 0
  ) {
    statsToSave = localStorage.getItem('PPP_ONE_STATS') +
      _this.seperator + reportStr;
  }
  try {
    localStorage.setItem('PPP_ONE_STATS', statsToSave);
  } catch (e) {
    /* empty */
  }
};

collection.send = function() {
  if (typeof localStorage === 'undefined' || localStorage === null) return;
  var _this = this;
  var pppOneStats = localStorage.getItem('PPP_ONE_STATS');
  if (pppOneStats === null ||
    pppOneStats.split(_this.seperator).length < _this.limit) {
    return;
  }
  try {
    var data = [];
    var origin = pppOneStats.split(_this.seperator);
    var token = md5(origin.join('&'));

    for (var i = 0; i < origin.length; i++) {
      data.push({
        app_id: getParam(origin[i], 'app_id'),
        channel: getParam(origin[i], 'channel'),
        ch_id: getParam(origin[i], 'ch_id'),
        host: getParam(origin[i], 'host'),
        time: getParam(origin[i], 'time'),
        type: getParam(origin[i], 'type'),
        user_agent: getParam(origin[i], 'user_agent'),
        puid: getParam(origin[i], 'puid')
      });
    }

    utils.request(_this.report_url, 'POST', data, function(data, status) {
      if (status == 200) {
        localStorage.removeItem('PPP_ONE_STATS');
      }
    }, undefined, {
      'X-Pingpp-Report-Token': token
    });
  } catch (e) {
    /* empty */
  }
};

collection.report = function(obj) {
  var _this = this;
  _this.store(obj);
  setTimeout(function(){
    _this.send();
  }, _this.timeout);
};

module.exports = collection;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cookieStorage = exports.is = undefined;

var _sandBox = __webpack_require__(7);

var is = exports.is = {
	env: function env() {
		return "development";
	},
	has: function has(val) {
		return !!val;
	},
	isNum: function isNum(val) {
		return val && /^[0-9]$/.test(val);
	},
	not: function not(val) {
		return !val;
	},
	empty: function empty(val) {
		return val === '';
	},
	age: function age(val) {
		return val && /^[0-9]{1,2}$/.test(val);
	},
	equal: function equal(v1, v2) {
		return v1 === v2;
	},
	qq: function qq(val) {
		return val && /^[1-9]\d{4,12}$/.test(val);
	},
	name: function name(val) {
		return val && /^[A-Za-z0-9\u4E00-\u9FA5_]{2,10}$/.test(val);
	},
	mobile: function mobile(val) {
		return val && /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/.test(val);
	},
	fifteen: function fifteen(val) {
		return val && /^[\d\-_\+]{2,15}$/.test(val);
	},
	email: function email(val) {
		return val && /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val);
	},
	password: function password(val) {
		return val && val.length && val.length > 5 && !/^\d+$/.test(val);
	},
	bank: function bank(val) {
		if (!val) return false;
		val = String(val);

		var lastNum = val.substr(val.length - 1, 1); //取出最后一位（与luhm进行比较）
		var first15Num = val.substr(0, val.length - 1); //前15或18位
		var newArr = [];
		for (var i = first15Num.length - 1; i > -1; i--) {
			//前15或18位倒序存进数组
			newArr.push(first15Num.substr(i, 1));
		}
		var arrJiShu = []; //奇数位*2的积 <9
		var arrJiShu2 = []; //奇数位*2的积 >9

		var arrOuShu = []; //偶数位数组
		for (var j = 0; j < newArr.length; j++) {
			if ((j + 1) % 2 == 1) {
				//奇数位
				if (parseInt(newArr[j]) * 2 < 9) {
					arrJiShu.push(parseInt(newArr[j]) * 2);
				} else {
					arrJiShu2.push(parseInt(newArr[j]) * 2);
				}
			} else {
				//偶数位
				arrOuShu.push(newArr[j]);
			}
		}

		var jishu_child1 = []; //奇数位*2 >9 的分割之后的数组个位数
		var jishu_child2 = []; //奇数位*2 >9 的分割之后的数组十位数
		for (var h = 0; h < arrJiShu2.length; h++) {
			jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
			jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
		}

		var sumJiShu = 0; //奇数位*2 < 9 的数组之和
		var sumOuShu = 0; //偶数位数组之和
		var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
		var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
		var sumTotal;
		for (var m = 0; m < arrJiShu.length; m++) {
			sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
		}

		for (var n = 0; n < arrOuShu.length; n++) {
			sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
		}

		for (var p = 0; p < jishu_child1.length; p++) {
			sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
			sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
		}
		//计算总和
		sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

		//计算Luhm值
		var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
		var luhm = 10 - k;

		return lastNum == luhm;
	}
};
/*获取当前页带参数的url*/
function getCurrentPageUrlWithArgs() {
	var pages = getCurrentPages(); //获取加载的页面
	var currentPage = pages[pages.length - 1]; //获取当前页面的对象
	var url = currentPage.route; //当前页面url
	var options = currentPage.options; //如果要获取url中所带的参数可以查看options

	//拼接url的参数
	var urlWithArgs = url + '?';
	for (var key in options) {
		var value = options[key];
		urlWithArgs += key + '=' + value + '&';
	}
	urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);

	return encodeURIComponent(urlWithArgs);
};
// 时间戳
var timeMap = {
	y: 31536000000,
	m: 2592000000,
	d: 86400000,
	h: 3600000,
	n: 60000,
	s: 1000
};
//缓存模块  时间可以是1y 1m 1d.. 还有毫秒数
var cookieStorage = exports.cookieStorage = {
	set: function set(key, value, time) {
		var data = {};
		data.data = value;
		var timestamp = "";
		time += "";
		// 缓存时间设置
		if (time) {
			var last = time.charAt(time.length - 1);
			console.log(last);
			if (!is.isNum(last)) {
				timestamp = time.slice(0, time.length - 1) * timeMap[last] + new Date().getTime();
			} else {
				timestamp = time * 1 + new Date().getTime();
			}
		} else {
			timestamp = null;
		}
		data.expire = timestamp;
		wx.setStorageSync(key, data);
		console.log(timestamp);
	},
	get: function get(key) {
		if (!wx.getStorageSync(key)) {
			return null;
		}
		var data = wx.getStorageSync(key),
		    expireTime = data.expire;
		if (expireTime) {
			if (expireTime > new Date().getTime()) {
				return data.data;
			} else {
				this.clear(key);
				return null;
			}
		} else {
			return data.data;
		}
	},
	clear: function clear(key) {
		wx.removeStorageSync(key);
	}
};
// 页面登陆
function pageLogin(url, callback) {
	var token = cookieStorage.get('user_token');
	if (!token) {
		wx.redirectTo({
			url: '/pages/user/register/register?url=' + url
		});
	} else {
		callback && callback(token);
	}
}

module.exports = {
	getUrl: getCurrentPageUrlWithArgs,
	pageLogin: pageLogin,
	is: is,
	cookieStorage: cookieStorage
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(12).v;
var testmode = __webpack_require__(13);
var callbacks = __webpack_require__(1);
var mods = __webpack_require__(3);
var stash = __webpack_require__(2);
var dc = __webpack_require__(9);
var payment_elements = __webpack_require__(8);

var hasOwn = {}.hasOwnProperty;
var PingppSDK = function () {
  __webpack_require__(32).init();
};

PingppSDK.prototype = {

  version: version,

  createPayment: function (chargeJSON, callback, signature, debug) {
    if (typeof callback === 'function') {
      callbacks.userCallback = callback;
    }

    payment_elements.init(chargeJSON);

    if (!hasOwn.call(payment_elements, 'id')) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_charge', 'no_charge_id'));
      return;
    }
    if (!hasOwn.call(payment_elements, 'channel')) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_charge', 'no_channel'));
      return;
    }
    if (hasOwn.call(payment_elements, 'app')) {
      if (typeof payment_elements.app === 'string') {
        stash.app_id = payment_elements.app;
      } else if (typeof payment_elements.app === 'object' &&
        typeof payment_elements.app.id === 'string') {
        stash.app_id = payment_elements.app.id;
      }
    }
    dc.report({
      type: 'pure_sdk_click',
      channel: payment_elements.channel,
      ch_id: payment_elements.id
    });
    var channel = payment_elements.channel;
    if (!hasOwn.call(payment_elements, 'credential')) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_charge', 'no_credential'));
      return;
    }
    if (!payment_elements.credential) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_credential', 'credential_is_undefined'));
      return;
    }
    if (!hasOwn.call(payment_elements.credential, channel)) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_credential', 'credential_is_incorrect'));
      return;
    }
    if (!hasOwn.call(payment_elements, 'livemode')) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_charge', 'no_livemode_field'));
      return;
    }
    var channelModule = mods.getChannelModule(channel);
    if (typeof channelModule === 'undefined') {
      console.error('channel module "' + channel + '" is undefined');
      callbacks.innerCallback('fail',
        callbacks.error('invalid_channel',
          'channel module "' + channel + '" is undefined')
      );
      return;
    }
    if (payment_elements.livemode === false) {
      if (hasOwn.call(channelModule, 'runTestMode')) {
        channelModule.runTestMode(payment_elements);
      } else {
        testmode.runTestMode(payment_elements);
      }
      return;
    }

    if (typeof signature != 'undefined') {
      stash.signature = signature;
    }
    if (typeof debug == 'boolean') {
      stash.debug = debug;
    }
    channelModule.handleCharge(payment_elements);
  },

  setAPURL: function (url) {
    stash.APURL = url;
  }
};

module.exports = new PingppSDK();


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  v: '2.1.13'
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  PINGPP_MOCK_URL: 'http://sissi.pingxx.com/mock.php',

  runTestMode: function (charge) {
    var params = {
      'ch_id': charge.id,
      'scheme': 'http',
      'channel': charge.channel
    };

    if (hasOwn.call(charge, 'order_no')) {
      params.order_no = charge.order_no;
    } else if (hasOwn.call(charge, 'orderNo')) {
      params.order_no = charge.orderNo;
    }
    if (hasOwn.call(charge, 'time_expire')) {
      params.time_expire = charge.time_expire;
    } else if (hasOwn.call(charge, 'timeExpire')) {
      params.time_expire = charge.timeExpire;
    }
    if (hasOwn.call(charge, 'extra')) {
      params.extra = encodeURIComponent(JSON.stringify(charge.extra));
    }
    utils.redirectTo(this.PINGPP_MOCK_URL + '?' + utils.stringifyData(params));
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  ALIPAY_PC_DIRECT_URL: 'https://mapi.alipay.com/gateway.do',

  handleCharge: function(charge) {
    var channel = charge.channel;
    var credential = charge.credential[channel];
    var baseURL = this.ALIPAY_PC_DIRECT_URL;
    if (hasOwn.call(credential, 'channel_url')) {
      baseURL = credential.channel_url;
    }
    if (!hasOwn.call(credential, '_input_charset')) {
      if(hasOwn.call(credential, 'service')
        && credential.service === 'create_direct_pay_by_user') {
        credential._input_charset = 'utf-8';
      }
    }
    var query = utils.stringifyData(credential, channel, true);
    utils.redirectTo(baseURL + '?' + query);
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var mods = __webpack_require__(3);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  ALIPAY_WAP_URL_OLD: 'https://wappaygw.alipay.com/service/rest.htm',
  ALIPAY_WAP_URL: 'https://mapi.alipay.com/gateway.do',

  handleCharge: function(charge) {
    var channel = charge.channel;
    var credential = charge.credential[channel];
    var baseURL = this.ALIPAY_WAP_URL;
    if (hasOwn.call(credential, 'req_data')) {
      baseURL = this.ALIPAY_WAP_URL_OLD;
    } else if (hasOwn.call(credential, 'channel_url')) {
      baseURL = credential.channel_url;
    }
    if (!hasOwn.call(credential, '_input_charset')) {
      if ((hasOwn.call(credential, 'service')
          && credential.service === 'alipay.wap.create.direct.pay.by.user')
        || hasOwn.call(credential, 'req_data')
      ) {
        credential._input_charset = 'utf-8';
      }
    }
    var query = utils.stringifyData(credential, channel, true);
    var targetURL = baseURL + '?' + query;
    var ap = mods.getExtraModule('ap');
    if (utils.inWeixin() && typeof ap !== 'undefined') {
      ap.pay(targetURL);
    } else {
      utils.redirectTo(targetURL);
    }
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var callbacks = __webpack_require__(1);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  handleCharge: function(charge) {
    var channel = charge.channel;
    var credential = charge.credential[channel];

    if (!hasOwn.call(credential, 'url')) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_credential', 'missing_field:url'));
      return;
    }
    utils.redirectTo(credential.url + '?' +
      utils.stringifyData(credential, channel));
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  CMB_WALLET_URL:
    'https://netpay.cmbchina.com/netpayment/BaseHttp.dll?MB_EUserPay',

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    var request_url = this.CMB_WALLET_URL;
    if (hasOwn.call(credential, 'ChannelUrl')) {
      request_url = credential.ChannelUrl;
      delete credential.ChannelUrl;
    }

    if (hasOwn.call(credential, 'channelVersion')) {
      delete credential.channelVersion;
    }

    utils.formSubmit(request_url, 'post', credential);
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);

module.exports = {

  CP_B2B_URL: 'https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0',

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    utils.formSubmit(this.CP_B2B_URL, 'post', credential);
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var redirectBase = __webpack_require__(4);

module.exports = {

  handleCharge: function(charge) {
    redirectBase.handleCharge(charge);
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var redirectBase = __webpack_require__(4);

module.exports = {

  handleCharge: function(charge) {
    redirectBase.handleCharge(charge);
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var redirectBase = __webpack_require__(4);
var callbacks = __webpack_require__(1);
var utils = __webpack_require__(0);
var hasOwn = {}.hasOwnProperty;

module.exports = {
  handleCharge: function (charge) {
    var extra = charge.extra;
    if (hasOwn.call(extra, 'pay_channel')) {
      var pay_channel = extra.pay_channel;
      if (pay_channel === 'wx' && !utils.inWeixin()) {
        callbacks.innerCallback('fail',
          callbacks.error('Not in the WeChat browser'));
        return;
      } else if (pay_channel === 'alipay' && !utils.inAlipay()) {
        callbacks.innerCallback('fail',
          callbacks.error('Not in the Alipay browser'));
        return;
      }
    } else {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_charge', 'charge 格式不正确'));
      return;
    }
    redirectBase.handleCharge(charge);
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  JDPAY_WAP_URL_OLD: 'https://m.jdpay.com/wepay/web/pay',
  JDPAY_H5_URL: 'https://h5pay.jd.com/jdpay/saveOrder',
  JDPAY_PC_URL: 'https://wepay.jd.com/jdpay/saveOrder',

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    var request_url = this.JDPAY_H5_URL;
    if (hasOwn.call(credential, 'channelUrl')) {
      request_url = credential.channelUrl;
      delete credential.channelUrl;
    } else if (hasOwn.call(credential, 'merchantRemark')) {
      request_url = this.JDPAY_WAP_URL_OLD;
    }
    utils.formSubmit(request_url, 'post', credential);
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var callbacks = __webpack_require__(1);
var utils = __webpack_require__(0);
var stash = __webpack_require__(2);
var hasOwn = {}.hasOwnProperty;

/*global mqq*/
module.exports = {
  SRC_URL: 'https://open.mobile.qq.com/sdk/qqapi.js?_bid=152',
  ID: 'mqq_api',

  handleCharge: function (charge) {
    var credential = charge.credential[charge.channel];

    if (!hasOwn.call(credential, 'token_id')) {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_credential', 'missing_token_id'));
      return;
    }

    stash.tokenId = credential.token_id;
    utils.loadUrlJs(this.ID, this.SRC_URL, this.callpay);
  },

  callpay: function () {
    if (typeof mqq != 'undefined') {
      if (mqq.QQVersion == 0) {
        callbacks.innerCallback('fail',
          callbacks.error('Not in the QQ client'));
        delete stash.tokenId;
        return;
      }
      mqq.tenpay.pay({
        tokenId: stash.tokenId
      }, function (result) {
        if (result.resultCode == 0) {
          callbacks.innerCallback('success');
        } else {
          callbacks.innerCallback('fail',
            callbacks.error(result.retmsg));
        }
      });
    } else {
      callbacks.innerCallback('fail',
        callbacks.error('network_err'));
    }
    delete stash.tokenId;
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);

module.exports = {

  UPACP_PC_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do',

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    utils.formSubmit(this.UPACP_PC_URL, 'post', credential);
  }
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);

module.exports = {

  UPACP_WAP_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do',

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    utils.formSubmit(this.UPACP_WAP_URL, 'post', credential);
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by yulitao on 2016/12/29.
 */
var stash = __webpack_require__(2);
var callbacks = __webpack_require__(1);
var hasOwn = {}.hasOwnProperty;
/*global wx*/
module.exports = {

  handleCharge: function (charge) {
    var credential = charge.credential[charge.channel];
    var fields = [
      'appId', 'timeStamp', 'nonceStr', 'package', 'signType', 'paySign'
    ];
    for (var k = 0; k < fields.length; k++) {
      if (!hasOwn.call(credential, fields[k])) {
        callbacks.innerCallback('fail',
          callbacks.error('invalid_credential', 'missing_field_' + fields[k]));
        return;
      }
    }
    stash.jsApiParameters = credential;
    this.callpay();
  },

  wxLiteEnabled: function () {
    return typeof wx !== 'undefined' && wx.requestPayment;
  },

  //微信小程序支付
  callpay: function () {
    if (!this.wxLiteEnabled()) {
      console.log('请在微信小程序中打开');
      return;
    }
    var wx_lite = stash.jsApiParameters;
    delete wx_lite.appId;
    wx_lite.complete = function (res) {
      //支付成功
      if (res.errMsg === 'requestPayment:ok') {
        callbacks.innerCallback('success');
      }
      //取消支付
      if (res.errMsg === 'requestPayment:cancel') {
        callbacks.innerCallback('cancel', callbacks.error('用户取消支付'));
      }
      //支付验证签名失败
      if (res.err_code !== 'undefined' && res.err_desc !== 'undefined') {
        callbacks.innerCallback('fail', callbacks.error(res.err_desc, res));
      }
    };
    wx.requestPayment(wx_lite);
  },

  /* eslint-disable no-unused-vars */
  runTestMode: function (url) {
    wx.showModal({
      title: '提示',
      content: '因 "微信小程序" 限制 域名的原因 暂不支持 模拟付款 请使用 livekey 获取 charge 进行支付'
    });
  }
  /* eslint-enable no-unused-vars */
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var callbacks = __webpack_require__(1);
var utils = __webpack_require__(0);
var stash = __webpack_require__(2);
var mods = __webpack_require__(3);
var hasOwn = {}.hasOwnProperty;

/*global WeixinJSBridge*/
module.exports = {

  PINGPP_NOTIFY_URL_BASE: 'https://notify.pingxx.com/notify',

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    var fields = [
      'appId', 'timeStamp', 'nonceStr', 'package', 'signType', 'paySign'
    ];
    for (var k = 0; k < fields.length; k++) {
      if (!hasOwn.call(credential, fields[k])) {
        callbacks.innerCallback('fail',
          callbacks.error('invalid_credential', 'missing_field_' + fields[k]));
        return;
      }
    }
    stash.jsApiParameters = credential;
    this.callpay();
  },

  callpay: function() {
    var self = this;
    var wx_jssdk = mods.getExtraModule('wx_jssdk');
    if (typeof wx_jssdk !== 'undefined' && wx_jssdk.jssdkEnabled()) {
      wx_jssdk.callpay();
    } else if (typeof WeixinJSBridge == 'undefined') {
      var eventCallback = function() {
        self.jsApiCall();
      };
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady',
          eventCallback, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', eventCallback);
        document.attachEvent('onWeixinJSBridgeReady', eventCallback);
      }
    } else {
      this.jsApiCall();
    }
  },

  jsApiCall: function() {
    if (hasOwn.call(stash, 'jsApiParameters')) {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        stash.jsApiParameters,
        function(res) {
          delete stash.jsApiParameters;
          if (res.err_msg == 'get_brand_wcpay_request:ok') {
            callbacks.innerCallback('success');
          } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
            callbacks.innerCallback('cancel');
          } else {
            callbacks.innerCallback('fail',
              callbacks.error('wx_result_fail', res.err_msg));
          }
        }
      );
    }
  },

  runTestMode: function(charge) {
    var dopay = confirm('模拟付款？');
    if (dopay) {
      var path = '/charges/' + charge.id;
      utils.request(this.PINGPP_NOTIFY_URL_BASE + path + '?livemode=false',
        'GET', null,
        function(data, status) {
          if (status >= 200 && status < 400 && data == 'success') {
            callbacks.innerCallback('success');
          } else {
            var extra = 'http_code:' + status + ';response:' + data;
            callbacks.innerCallback('fail',
              callbacks.error('testmode_notify_fail', extra));
          }
        },
        function() {
          callbacks.innerCallback('fail', callbacks.error('network_err'));
        });
    }
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var callbacks = __webpack_require__(1);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  handleCharge: function(charge) {
    var credential = charge.credential[charge.channel];
    if (typeof credential === 'string') {
      utils.redirectTo(credential);
    } else if (typeof credential === 'object'
      && hasOwn.call(credential, 'url')
    ) {
      utils.redirectTo(credential.url);
    } else {
      callbacks.innerCallback('fail',
        callbacks.error('invalid_credential', 'credential 格式不正确'));
    }
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var callbacks = __webpack_require__(1);
var hasOwn = {}.hasOwnProperty;

module.exports = {

  YEEPAY_WAP_URL: 'https://ok.yeepay.com/paymobile/api/pay/request',
  YEEPAY_WAP_TEST_URL: 'http://mobiletest.yeepay.com/paymobile/api/pay/request',

  handleCharge: function(charge) {
    var channel = charge.channel;
    var credential = charge.credential[channel];
    var fields = ['merchantaccount', 'encryptkey', 'data'];
    for (var k = 0; k < fields.length; k++) {
      if (!hasOwn.call(credential, fields[k])) {
        callbacks.innerCallback('fail',
          callbacks.error('invalid_credential', 'missing_field_' + fields[k]));
        return;
      }
    }
    var baseURL;
    if (hasOwn.call(credential, 'mode') && credential.mode == 'test') {
      baseURL = this.YEEPAY_WAP_TEST_URL;
    } else {
      baseURL = this.YEEPAY_WAP_URL;
    }
    utils.redirectTo(baseURL + '?' +
      utils.stringifyData(credential, channel, true));
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var stash = __webpack_require__(2);
var hasOwn = {}.hasOwnProperty;

(function() {
  var b = {};
  var a = {};
  a.PADCHAR = '=';
  a.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  a.makeDOMException = function() {
    try {
      return new DOMException(DOMException.INVALID_CHARACTER_ERR);
    } catch (d) {
      var c = new Error('DOM Exception 5');
      c.code = c.number = 5;
      c.name = c.description = 'INVALID_CHARACTER_ERR';
      c.toString = function() {
        return 'Error: ' + c.name + ': ' + c.message;
      };
      return c;
    }
  };
  a.getbyte64 = function(e, d) {
    var c = a.ALPHA.indexOf(e.charAt(d));
    if (c === -1) {
      throw a.makeDOMException();
    }
    return c;
  };
  a.decode = function(f) {
    f = '' + f;
    var j = a.getbyte64;
    var h, e, g;
    var d = f.length;
    if (d === 0) {
      return f;
    }
    if (d % 4 !== 0) {
      throw a.makeDOMException();
    }
    h = 0;
    if (f.charAt(d - 1) === a.PADCHAR) {
      h = 1;
      if (f.charAt(d - 2) === a.PADCHAR) {
        h = 2;
      }
      d -= 4;
    }
    var c = [];
    for (e = 0; e < d; e += 4) {
      g = (j(f, e) << 18) |
        (j(f, e + 1) << 12) |
        (j(f, e + 2) << 6) |
        j(f, e + 3);
      c.push(String.fromCharCode(g >> 16, (g >> 8) & 255, g & 255));
    }
    switch (h) {
      case 1:
        g = (j(f, e) << 18) | (j(f, e + 1) << 12) | (j(f, e + 2) << 6);
        c.push(String.fromCharCode(g >> 16, (g >> 8) & 255));
        break;
      case 2:
        g = (j(f, e) << 18) | (j(f, e + 1) << 12);
        c.push(String.fromCharCode(g >> 16));
        break;
    }
    return c.join('');
  };
  a.getbyte = function(e, d) {
    var c = e.charCodeAt(d);
    if (c > 255) {
      throw a.makeDOMException();
    }
    return c;
  };
  a.encode = function(f) {
    if (arguments.length !== 1) {
      throw new SyntaxError('Not enough arguments');
    }
    var g = a.PADCHAR;
    var h = a.ALPHA;
    var k = a.getbyte;
    var e, j;
    var c = [];
    f = '' + f;
    var d = f.length - f.length % 3;
    if (f.length === 0) {
      return f;
    }
    for (e = 0; e < d; e += 3) {
      j = (k(f, e) << 16) | (k(f, e + 1) << 8) | k(f, e + 2);
      c.push(h.charAt(j >> 18));
      c.push(h.charAt((j >> 12) & 63));
      c.push(h.charAt((j >> 6) & 63));
      c.push(h.charAt(j & 63));
    }
    switch (f.length - d) {
      case 1:
        j = k(f, e) << 16;
        c.push(h.charAt(j >> 18) + h.charAt((j >> 12) & 63) + g + g);
        break;
      case 2:
        j = (k(f, e) << 16) | (k(f, e + 1) << 8);
        c.push(h.charAt(j >> 18) +
          h.charAt((j >> 12) & 63) +
          h.charAt((j >> 6) & 63) + g);
        break;
    }
    return c.join('');
  };
  b.url = 'pay.htm';
  b.pay = function(d) {
    var c = encodeURIComponent(a.encode(d));
    if (hasOwn.call(stash, 'APURL')) {
      b.url = stash.APURL;
    }
    location.href = b.url + '?goto=' + c;
  };
  b.decode = function(c) {
    return a.decode(decodeURIComponent(c));
  };

  module.exports = b;
})();


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global unescape, module */

(function () {
  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safe_add (x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bit_rol (num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5_cmn (q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function md5_ff (a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  function md5_gg (a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  function md5_hh (a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5_ii (a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binl_md5 (x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;

      a = md5_ff(a, b, c, d, x[i], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = md5_ii(a, b, c, d, x[i], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return [a, b, c, d];
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr (input) {
    var i;
    var output = '';
    for (i = 0; i < input.length * 32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
    }
    return output;
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl (input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < input.length * 8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
    }
    return output;
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstr_md5 (s) {
    return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstr_hmac_md5 (key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binl_md5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex (input) {
    var hex_tab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt((x >>> 4) & 0x0F) +
      hex_tab.charAt(x & 0x0F);
    }
    return output;
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstr_utf8 (input) {
    return unescape(encodeURIComponent(input));
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function raw_md5 (s) {
    return rstr_md5(str2rstr_utf8(s));
  }
  function hex_md5 (s) {
    return rstr2hex(raw_md5(s));
  }
  function raw_hmac_md5 (k, d) {
    return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
  }
  function hex_hmac_md5 (k, d) {
    return rstr2hex(raw_hmac_md5(k, d));
  }

  function md5 (string, key, raw) {
    if (!key) {
      if (!raw) {
        return hex_md5(string);
      }
      return raw_md5(string);
    }
    if (!raw) {
      return hex_hmac_md5(key, string);
    }
    return raw_hmac_md5(key, string);
  }

  module.exports = md5;
}());


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var stash = __webpack_require__(2);
var utils = __webpack_require__(0);
var dc = __webpack_require__(9);

module.exports = {
  SRC_URL: 'https://cookie.pingxx.com',

  init: function() {
    var self = this;
    utils.documentReady(function(){
      self.initPuid();
    });
  },

  initPuid: function() {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined'
        || localStorage === null) {
      return;
    }
    var puid = localStorage.getItem('pingpp_uid');
    if (puid === null) {
      puid = utils.randomString();
      try {
        localStorage.setItem('pingpp_uid', puid);
      } catch (e) {
        /* empty */
      }
    }
    stash.puid = puid;
    if (!document.getElementById('p_analyse_iframe')) {
      var iframe;
      try {
        iframe = document.createElement('iframe');
      }catch(e){
        iframe = document.createElement('<iframe name="ifr"></iframe>');
      }
      iframe.id = 'p_analyse_iframe';
      iframe.src = this.SRC_URL + '/?puid=' + puid;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    setTimeout(function() {
      dc.send();
    }, 0);
  }
};


/***/ })
/******/ ]);
});