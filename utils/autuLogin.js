import util from './util.js';
import { login } from './../API/user.js';
// import { logout } from './../API/api.js';

export default function authLogin(login_type){
  return new Promise((reslove, reject) => {
    util.autoLogin().then(userInfo => {
      if (login_type !== undefined) userInfo.login_type = 'routine';
      login(userInfo).then(res => {
        getApp().globalData.token = res.data.token;
        getApp().globalData.userInfo = res.data.userInfo;
        getApp().globalData.isLog = true;
        getApp().globalData.expiresTime = res.data.expires_time;
        if (res.data.cache_key) wx.setStorage({ key: 'cache_key', data: res.data.cache_key });
        reslove();
      }).catch(err=>{
        reject();
      });
    }).catch(err=>{
      reject();
    });
  })
}