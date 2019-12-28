// homeSub/pages/moreactivity/moreActivity.js

import UTIL from "../../utils/util";
const WXAPI = require('../../API/API')
import create from '../../utils/omi/create'
import store from '../../store/index'

create(store,{

  /**
   * 页面的初始数据
   */
  data: {
      //首页动态列表
      dynamicList:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
      this.getActivity();

  },



    getActivity:function(){
        WXAPI.ActivityHome({
            page:1,
            size:10
        }).then(res=>{
            if(res.code===200){
              this.setData({
                dynamicList: res.data,
              })
            }else {
                UTIL.toast(res.message)
            }
        })
    },


    clickDy:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/homeDetail/homeDetail?id='+e.currentTarget.dataset.id
        })

    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})