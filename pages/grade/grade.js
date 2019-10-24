// pages/grade/grade.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      gradeList:[
          {
              id:1,
              name:'完善身份认证',
              score:'+6'
          },
          {
              id:1,
              name:'点击广告',
              score:'+12'
          },
          {
              id:1,
              name:'点击视频',
              score:'+18'
          }
      ],
      task:[
          {id:1,name:'满足积分2000分',task_type_title:'还需要1900积分',illustrate:false,finish:false,speed:'10',number:2000,new_number:100},
      ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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