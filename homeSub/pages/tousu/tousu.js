// package/pages/tousu/tousu.js
import UTIL from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      changeColor:'rgba(231,231,232,1)',
      list: [
          {id:1,name:'政治敏感',isCheck:false},
          {id:2,name:'广告营销',isCheck:false},
          {id:3,name:'淫秽色情',isCheck:false},
          {id:4,name:'人身攻击',isCheck:false},
          {id:5,name:'地域攻击',isCheck:false},
          {id:6,name:'其它',isCheck:false}
          ],
      result: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          id:options.id
      })

  },

    //点击每一行
    clickCell:function(e){

        let index = e.currentTarget.dataset.index;
        let id = e.currentTarget.dataset.id;
        this.data.result.push(id)

        let isCheck= "list["+index+"].isCheck";

        this.setData({
            [isCheck]: !this.data.list[index].isCheck,
        })

        console.log(this.data.result,'llll');


    },





  //  提交作品

    clickSubmit:function(e){

        UTIL.toast('提交成功');
        // wx.navigateBack();
    },

})