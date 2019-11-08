import create from '../../../utils/omi/create'
import store from '../../../store/index'
import data from '../../../data/data'
create(store,{

  /**
   * 页面的初始数据
   */
  data: {

      userInfo:{
          ava:'https://dcdn.it120.cc/2019/09/26/1437dbec-d951-45a6-8050-89ae11ccd54e.png',
          name:'赵文',
          grade:'等级',
          badge:'徽章',
          sex:'男',
          community:'阳光花墅',
          numberInfo:[
              {id:1,name:'状态',num:10},
              {id:1,name:'关注',num:10},
              {id:1,name:'粉丝',num:80},
              {id:1,name:'获赞',num:60},
          ]

      },
      //成员动态
      articleList:data.mySpaceDyList,



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      wx.setNavigationBarTitle({
        title: options.name
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