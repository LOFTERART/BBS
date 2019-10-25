// package/pages/tousu/tousu.js
import UTIL from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      changeColor:'rgba(231,231,232,1)',
      list: [
          {id:1,name:'政治敏感'},
          {id:2,name:'广告营销'},
          {id:3,name:'淫秽色情'},
          {id:4,name:'人身攻击'},
          {id:5,name:'地域攻击'},
          {id:6,name:'其它'}
          ],
      result: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      console.log(options.id);
      this.setData({
          id:options.id
      })

  },

    onChange(event) {
        console.log(event,"change");
        this.setData({
            result: event.detail,
            changeColor:'rgba(253,96,28,1)'
        });
    },

    toggle(event) {
        console.log(event,"log");
        const { name } = event.currentTarget.dataset;
        const checkbox = this.selectComponent(`.checkboxes-${name}`);
        checkbox&&checkbox.toggle();
    },

    noop() {},


  //  提交作品

    clickSubmit:function(e){
        console.log(e.detail.formId,this.data.result,this.data.id);
        UTIL.toast('提交成功');
        // wx.navigateBack();
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