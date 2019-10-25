// homeSub/pages/moreactivity/moreActivity.js
Page({

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
      let arrayList=[];
      for (let i =0;i<=10;i++){
          arrayList.push(
              {
                  id:1,
                  name:'趣知游第一届香山旅游活动召集令',
                  subName:'2019年 河南人在北京同乡会',
                  tags:'#免费 #旅游 #香山 #吃喝玩乐 #一日游',
                  price:99, //现价
                  originalPrice:199, //原价
                  image:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg',
                  memNum:10, //已报名成员
                  totalNum:100, //总成员
                  status:{color:'#ff7900',desc:'进行中'},  //动态当前状态    未开始 进行中 已结束
                  author: "趣知游",
                  dateAdd: "2019-10-22 14:26:01",
                  dateUpdate: "2019-10-22 14:29:02",
                  views: 10 //浏览量
              },
              {
                  id:2,
                  name:'趣知游第一届香山旅游活动召集令',
                  subName:'2019年 河南人在北京同乡会',
                  tags:'#免费 #旅游 #香山 #吃喝玩乐 #一日游',
                  price:99, //现价
                  originalPrice:199, //原价
                  image:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg',
                  memNum:10, //已报名成员
                  totalNum:100, //总成员
                  status:{color:'#ff7900',desc:'进行中'},  //动态当前状态    未开始 进行中 已结束
                  author: "趣知游",
                  dateAdd: "2019-10-22 14:26:01",
                  dateUpdate: "2019-10-22 14:29:02",
                  views: 10 //浏览量
              }
          )


      }
      this.setData({
          dynamicList:arrayList,
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