// pages/together/together.js
import create from '../../../utils/omi/create'
import store from '../../../store/index'
import data from '../../../data/data'
const WXAPI = require('../../../API/API')
create(store,{

  /**
   * 页面的初始数据
   */
  data: {
      artList:[],
      theme:{name:'# 寻找流浪猫',themeId:10}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options,'op');
      wx.setNavigationBarTitle({
        title: options.name
      })
      this.setData({
          name:options.name,
          KingHeader:{
              name:options.name,
              KingPic:options.pic,
              KingDes:options.des,
              KingImage:options.image,
              isFollow:false,
              actionid:1,
          },
      })

      this.getDiary(options.tagid,options.cid);
  },


    //获取日志
    getDiary:function(tagid,cid){
        WXAPI.getHomeDiarys({
            page:1,
            size:10,
            communityId:Number(cid),
            sub_topic_id:Number(tagid)
        }).then(res=>{
            this.setData({
                artList:res.data.items
            })
        })
    },



    //立即参与
    clickAction:function(e){

        wx.navigateTo({
            url: '/homeSub/pages/AddBbs/AddBbs?name='+e.currentTarget.dataset.name+'&id='+e.currentTarget.dataset.id
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
