// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      loveHobb:[
          {id:1,name:'早睡打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'早起打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'不吃零食打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'准时上班打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'戒烟打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'戒糖打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'多喝水打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
          {id:1,name:'戒酒打卡',image:'https://dcdn.it120.cc/2019/10/26/cc6c2417-58d4-4a12-a595-bdd73537d6c9.png',own:'已累计打卡0天'},
      ],


      showModalStatus: false,

      loveName:'',
      tempFilePaths:'https://static1.keepcdn.com/2019/05/28/1559017752974_460x238.png'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

    clickCamera:function(){
        var that =this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFilePaths
                that.setData({
                    tempFilePaths:tempFilePaths,
                })

            }
        })
    },

    clickCell:function(e){

        wx.hideTabBar({
            animation:true
        })

        this.setData({
            showModalStatus: true,
        })
        wx.setNavigationBarTitle({
          title: e.currentTarget.dataset.name
        })

    },

    //关闭评论
    hideModal: function() {
        wx.showTabBar({
            animation:true
        })
        this.setData({
            showModalStatus: false
        })
        wx.setNavigationBarTitle({
            title: '养成好习惯'
        })
    },

    clickDK:function(){
        wx.showTabBar({
            animation:true
        })
        this.setData({
            showModalStatus: false
        })
        wx.setNavigationBarTitle({
            title: '养成好习惯'
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