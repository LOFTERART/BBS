// pages/aiDynamic/aiDynamic.js
import UTIL from "../../utils/util";
import data from "../../data/data";
const app = getApp()
import create from '../../utils/omi/create'
import store from '../../store/index'
create(store,{
    use: [
        'userInfo'
    ],

    computed:{
    },


    data:{
        aiCatList:[
            {id:1,name:'活动精选',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',type:'JX'},
            {id:2,name:'热门活动',image:'https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png',type:'RM'},
            {id:3,name:'最新话题',image:'https://dcdn.it120.cc/2019/10/26/b2012b31-25e4-47b8-8f72-1554ac0dc797.png',type:'JX'},
        ],
        articleList:data.aiDyList,

        hotList: [
            {id:1,name:'#你会因为孩子哭泣尔妥协吗# PK',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',views:'87.7万阅读'},
            {id:2,name:'#孩子说过什么让你记忆深刻#',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',views:'5万阅读'},
            {id:3,name:'#活动精选#',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',views:'100.6万阅读'}
        ]

    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // app.wxLogin().then(res=>{
      //     console.log(res,'code');
      // })

  },


    clickAI:function(e){

        let type = e.currentTarget.dataset.type

        if(type==='RM'){
            wx.navigateTo({
                url: '/homeSub/pages/moreActivity/moreActivity'
            })
        }else {
            UTIL.toast('待开发')
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