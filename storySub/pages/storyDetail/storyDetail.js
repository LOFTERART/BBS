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
      commentList:data.commentList,
      showModalStatus: false,
      isShowBottom:true,  //是否显示底部评论bar
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



    //点击评论

    btnCmt: function() {
        this.setData({
            showModalStatus: true,
            isShowBottom:false,
            placeholders:'......'
        })
    },


    //点击取消按钮
    clickQx:function(){
        this.setData({
            showModalStatus: false,
            isShowBottom:true
        })
    },
    //关闭评论
    hideModal: function() {
        this.setData({
            showModalStatus: false,
            isShowBottom:true,
        })
    },


    //文字点评获取输入文字
    onGetValue(event) {
        console.log(event.detail.value);
        this.setData({
            message:event.detail.value
        })
    },

    collection: function () {
        this.setData({
            isCollection: !this.data.isCollection
        }, () => {
            if (this.data.isCollection) {
                UTIL.toast("收藏成功！");
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