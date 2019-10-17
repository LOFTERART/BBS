// mySub/pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      myList:[
          {id:6500,name:"隐私政策",isShowRed:false,subName:"隐私政策",type:"YSZC",isShowIcon:true,url:'https://m.baidu.com/'},
          {id:6499,name:"用户协议",isShowRed:false,subName:"协议",type:"YHXY",isShowIcon:true,url:'https://m.baidu.com/'},
          {id:6527,name:"公司介绍",isShowRed:false,subName:"公司介绍",type:"GS",isShowIcon:true,url:'https://m.baidu.com/'},
          {id:6501,name:"功能介绍",isShowRed:false,subName:"Version 0.0.1",type:"tool",isShowIcon:true,url:'https://m.baidu.com/'},
          {id:1,name:"意见反馈",isShowRed:false,subName:"反馈",type:"help",isShowIcon:true,url:'https://m.baidu.com/'},
          {id:1,name:"客服",isShowRed:false,subName:"客服",type:"KF",isShowIcon:true,url:'https://m.baidu.com/'},
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

    clickCell:function (e) {
        console.log(e.currentTarget.dataset.id);
        if(e.currentTarget.dataset.type==='YSZC'){
            wx.navigateTo({
                url: '/mySub/pages/H5/H5?id='+e.currentTarget.dataset.id
            })
        }else if(e.currentTarget.dataset.type==='YHXY'){
            wx.navigateTo({
                url: '/mySub/pages/H5/H5?id='+e.currentTarget.dataset.id
            })
        }else if(e.currentTarget.dataset.type==='tool'){
            wx.navigateTo({
                url: '/mySub/pages/H5/H5?id='+e.currentTarget.dataset.id
            })
        }else if(e.currentTarget.dataset.type==='GS'){
            wx.navigateTo({
                url: '/mySub/pages/H5/H5?id='+e.currentTarget.dataset.id
            })
        }

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