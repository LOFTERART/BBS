const util = require('../../../utils/util.js')
Page({
  data: {
    fabulous: 123,
    isFabulous: false,
    isCollection: false,
    cmtList: [
        {
            id:1,
      avatar: "jpg",
      nickname: "米兰的卡先生",
      fabulous: 123,
      isFabulous: false,
      content: "我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？",
       //显示作者回评
      reply: [
          {
              id:1,
          nickname: "美术圈",
          content: "新政实行后，大小摩托轮流冲，不用经常上迪力了，杨帅该拿下就拿下☺"
         }
      ],
      replayNum: 3,
      time: "昨天 22:12"
    },
        {
            id:1,
        avatar: "jpg",
      nickname: "美术圈",
      fabulous: 2,
      content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",
      reply: [
          {
              id:1,
        nickname: "美术世界",
        content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友"
      },
      ],
      replayNum: 2,
      time: "昨天 21:09"
    },
        {
            id:1,
        avatar: "jpg",
      nickname: "美术世界",
      fabulous: 0,
        content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛 ☻ ☻ ☻",
      reply: [],
      replayNum: 0,
      time: "昨天 17:30"
    }
    ],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  onLoad: function (options) {

  },
  btnFabulous: function () {
    this.setData({
      fabulous: this.data.isFabulous ? 123 : 124,
      isFabulous: !this.data.isFabulous
    })
  },
  cmtFabulous: function (e) {
    let index = e.currentTarget.id;
    let fabulousObj = `cmtList[${index}].fabulous`;
    let isFabulousObj = `cmtList[${index}].isFabulous`;
    let isFabulous = this.data.cmtList[index].isFabulous;
    let fabulous = this.data.cmtList[index].fabulous;
    let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
    this.setData({
      [fabulousObj]: fabulousNum,
      [isFabulousObj]: !isFabulous
    })
  },
  collection: function () {
    this.setData({
      isCollection: !this.data.isCollection
    }, () => {
      if (this.data.isCollection) {
        util.toast("收藏成功！");
      }
    })
  },
  btnCmt: function () {
      util.toast('待开发')
    // wx.navigateTo({
    //   url: '../news-cmt/news-cmt'
    // })
  },
  //  跳转到评论
  cmtAll: function () {
      wx.pageScrollTo({
          selector:'.tui-cmt-title',
          duration: 300
      })
  },
  cmtReply: function () {
    wx.navigateTo({
      url: '../news-cmt-reply/news-cmt-reply'
    })
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      if (this.data.pageIndex == 3) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        let arr = JSON.parse(JSON.stringify(this.data.cmtList));
        this.setData({
          cmtList: this.data.cmtList.concat(arr),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  }
})