import data from "../../../data/data";
const WXAPI = require('../../../API/API')
import UTIL from '../../../utils/util'
const app = getApp();
const WxParse = require('../../../component/wxParse/wxParse');


Page({

  /**
   * 页面的初始数据
   */
  data: {
//评论列表
      commentList:data.commentList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that =this;

      WXAPI.CmsArticleDetail({
          id:18511
      }).then(function (res) {
          if (res.code == 0) {
              that.setData({
                  notice: res.data
              });
              WxParse.wxParse('article', 'html', res.data.content, that, 5);
          }
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