// pages/aiDynamic/aiDynamic.js
import UTIL from "../../utils/util";
import data from '../../data/data'
import create from '../../utils/omi/create'
import store from '../../store/AI'
const app = getApp()
create(store,{
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      this.store.data.aiCatList.push( {id:1,name:'活动精选',image:'https://dcdn.it120.cc/2019/10/26/e6a977e7-cecb-45b2-9c8f-7b7512e7a9ea.png',type:'JX'},)

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