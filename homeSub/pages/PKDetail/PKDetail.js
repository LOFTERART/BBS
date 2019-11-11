// homeSub/pages/PKDetail/PKDetail.js
import data from "../../../data/data";
import UTIL from "../../../utils/util";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      //评论列表
      commentList:data.commentList,
      PK:{
          squareNum:1500,
          opposingNum:2000,
      },

      showModalStatus: false,
      isShowBottom:true,  //是否显示底部评论bar

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


    //点击多少人赞过

    clickLikePeople:function(){
        wx.navigateTo({
            url: '/homeSub/pages/likePeople/likePeople'
        })
    },



    collection: function () {
        this.setData({
            isCollection: !this.data.isCollection
        }, () => {
            if (this.data.isCollection) {
                UTIL.toast("收藏成功！");
            }
        })
    },



    //点击评论

    btnCmt: function() {
        this.setData({
            showModalStatus: true,
            isShowBottom:false,
            placeholders:'@'+'...'
        })
    },


    //点击取消按钮
    clickQx:function(){
        this.setData({
            showModalStatus: false,
            isShowBottom:true
        })
    },
    //关闭评论
    hideModal: function() {
        this.setData({
            showModalStatus: false,
            isShowBottom:true,
        })
    },


    //文字点评获取输入文字
    onGetValue(event) {
        console.log(event.detail.value);
        this.setData({
            message:event.detail.value
        })
    },


    //发表评价
    clickFb:function(){

        let params = {
            id:this.data.dailyInfo.id,
            content:this.data.ly,
            studio_id:this.store.data.userInfo.studio_id,
            user_id:this.store.data.userInfo.admin_id,
            user_type:this.store.data.userInfo.user_role,
            daily_comment_pid:this.data.daily_comment_pid,
            reply_user_id:this.data.reply_user_id,
            reply_user_type:this.data.reply_user_type,
        };

        WXAPI.ArtZTPL(params).then((res)=>{
            console.log(res);
            this.setData({
                dPshow: false,
                placeholders:'写下你的...'
            });
            UTIL.toast('评论成功~');
            this.setData({
                page: 0
            });
            this.getZTList(false,this.data.id);
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