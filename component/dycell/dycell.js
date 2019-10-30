// component/dycell/dycell.js
import UTIL from "../../utils/util";

//获取应用实例
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      articleList:{
          type: Array,
          value: [], //不存在此属性时
      },
      isShowFollow:{
          type: Boolean,
          value: false, //不存在此属性时
      },
      tag:{
          type: String,
          value: '', //不存在此属性时
      },


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

      clickName:function(){
          UTIL.toast('让身边的人更有温度~')
      },

      clickVip:function(e){
          UTIL.toast(e.currentTarget.dataset.auth)
      },

      //点击关注按钮
      clickAction:function(e){


          wx.vibrateShort();
          let index = e.currentTarget.dataset.index;
          let id = e.currentTarget.dataset.id;

          console.log(1,index,id)
          let isFollow= "articleList["+index+"].isFollow";
          let followDes= "articleList["+index+"].followDes";

          if(this.data.articleList[index].isFollow){
              this.setData({
                  [isFollow]: !this.data.articleList[index].isFollow,
                  [followDes]: '关注',
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
          }else {
              this.setData({
                  [isFollow]: !this.data.articleList[index].isFollow,
                  [followDes]: '已关注',
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
          }



      },

      //  like 点赞
      clickLike:function(e){

          wx.vibrateShort();
          let index = e.currentTarget.dataset.index;
          let is_like= "articleList["+index+"].is_like";
          let like= "articleList["+index+"].like";

          if(this.data.articleList[index].is_like){
              this.setData({
                  [is_like]: !this.data.articleList[index].is_like,
                  [like]: this.data.articleList[index].like-1,
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
          }else {
              this.setData({
                  [is_like]: !this.data.articleList[index].is_like,
                  [like]: this.data.articleList[index].like+1,
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
          }



      },

      //点击头像

      clickAva:function(e){
          wx.navigateTo({
              url: '/mySub/pages/mySpace/mySpace?name='+e.currentTarget.dataset.name
          })
      },

      //预览图片
      tapBanner:function(e){

          console.log(e,'fff');

          var newPic=[]
          e.currentTarget.dataset.pics.forEach((item,index)=>{
              newPic.push(item.url)
          })
          wx.previewImage({
              current: e.currentTarget.dataset.pic,
              urls: newPic
          })

      },



      //点击文字跳转详情
      clickDailyContent:function(e){
          wx.navigateTo({
              url: '/homeSub/pages/ztDetail/ztDetail?id='+e.currentTarget.dataset.id
          })

      },

//   点击#

      clickTogether:function (e) {
          wx.navigateTo({
              url: '/homeSub/pages/together/together?name='+e.currentTarget.dataset.tag
          })
      },


      //点击更多投诉
      clickMore:function(e){
          var that=this
          wx.showActionSheet({
              itemList: [
                  '收藏',
                  '投诉'
              ],
              success (res) {
                  if(res.tapIndex===1){
                      wx.navigateTo({
                          url: '/homeSub/pages/tousu/tousu?id='+e.currentTarget.dataset.id
                      })

                  }else {
                      UTIL.toast('收藏成功')
                  }
              },
              fail (res) {
                  console.log(res.errMsg)
              }
          })

      },

  }
})
