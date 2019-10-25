// mySub/pages/mySpace/mySpace.js
Page({

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
              {id:1,name:'关注',num:10},
              {id:1,name:'粉丝',num:80},
              {id:1,name:'获赞',num:60},
          ]

      },
      //成员动态
      articleList:[

      ],



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      wx.setNavigationBarTitle({
        title: options.name
      })


      let arrayArticleList=[];
      for (let i =0;i<=10;i++){
          arrayArticleList.push(
              {
                  address: "阳光花墅",
                  tag:'# 寻找流浪猫',
                  avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                  comment: 0,
                  content: "在小区发现一只流浪喵,有认识的吗?",
                  follow: 0,
                  follow_user_id: 3804,
                  follow_user_type: "teacher",
                  id: 27565,
                  image_url_came: [
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                  ],
                  image_url_came_thumb: [
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                  ],
                  is_activating: true,
                  is_del: true,
                  is_follow: false,
                  is_like: true,
                  is_parent: false,
                  is_top: false,
                  like: 1,
                  name: "赵文",
                  status: "前端开发",
                  timer: '1天前',
                  url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                  views: 0,
              },
              {
                  address: "阳光花墅",
                  tag:'# 包打听',
                  avatar: "https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg",
                  comment: 0,
                  content: "咱们附件有九阳豆浆机售后吗?",
                  follow: 0,
                  follow_user_id: 3804,
                  follow_user_type: "teacher",
                  id: 27565,
                  image_url_came: [
                      {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                  ],
                  image_url_came_thumb: [

                      {url:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                      {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},

                  ],
                  is_activating: true,
                  is_del: true,
                  is_follow: false,
                  is_like: true,
                  is_parent: false,
                  is_top: false,
                  like: 1,
                  name: "闫莎",
                  status: "销售",
                  timer: '刚刚',
                  url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                  views: 0,
              },
          )
      }

      this.setData({
          articleList:arrayArticleList,
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