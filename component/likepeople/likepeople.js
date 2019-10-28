// component/likepeople/likepeople.js
import UTIL from "../../utils/util";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      //点赞的人
      likeUserList:{
          type: Array,
          value: [], //不存在此属性时
      }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

      //点击头像

      clickAva:function(e){
          wx.navigateTo({
              url: '/mySub/pages/mySpace/mySpace?name='+e.currentTarget.dataset.name
          })
      },

      clickName:function(){
          UTIL.toast('让身边的人更有温度~')
      },

      clickVip:function(e){
          UTIL.toast(e.currentTarget.dataset.auth)

      },



      //  关注
      clickFollow:function(e){
          wx.vibrateShort();
          let index = e.currentTarget.dataset.index;
          let isShowFollow= "likeUserList["+index+"].isShowFollow";
          let followDes= "likeUserList["+index+"].followDes";

          if(this.data.likeUserList[index].isShowFollow){
              this.setData({
                  [isShowFollow]: !this.data.likeUserList[index].isShowFollow,
                  [followDes]: '关注',
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
          }else {
              this.setData({
                  [isShowFollow]: !this.data.likeUserList[index].isShowFollow,
                  // [like]: this.data.articleList[index].like+1,
                  [followDes]: '已关注',
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
          }



      },


  }
})
