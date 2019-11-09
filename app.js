const ald = require('./utils/ald-stat.js')
import UTIL from './utils/util'
const WXAPI = require('/API/API')
App({
    onLaunch: function () {
        this.updataApp();
        if(this.globalData.userInfo.userId){
            this.wxLogin();
        }
    },

    wxLogin:function() {
        let that = this;
        return new Promise((resolve, reject) => {
            wx.login({
                success (res) {
                    if (res.code) {
                        WXAPI.QZYLogin({
                            code:res.code,
                            isShowLoading:true
                        }).then(res=>{
                            console.log(res,'code返回');
                            if(Number(res.code)===200){
                                wx.setStorageSync('userId', res.data);
                                that.globalData.userInfo.userId=res.data
                                resolve(res.data)
                            }else {
                                UTIL.toast(res.message)
                            }
                        })
                    } else {
                       UTIL.toast('code获取失败')
                    }
                }
            })
        })
    },


    //更新
    updataApp: function () {//版本更新
        if (wx.canIUse('getUpdateManager')) {
            const updateManager = wx.getUpdateManager()
            updateManager.onCheckForUpdate(function (res) {
                if (res.hasUpdate) { // 请求完新版本信息的回调
                    updateManager.onUpdateReady(function () {
                        wx.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success: function (res) {
                                if (res.confirm) {// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                    updateManager.applyUpdate()
                                }
                            }
                        })
                    })
                    updateManager.onUpdateFailed(function () {
                        wx.showModal({// 新的版本下载失败
                            title: '已经有新版本了哟~',
                            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
                        })
                    })
                }
            })
        } else {
            wx.showModal({// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
    },


    globalData: {
        userInfo: {
            userId:null
        }
    }




})






