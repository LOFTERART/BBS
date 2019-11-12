// homeSub/pages/PKDetail/PKDetail.js
import data from "../../../data/data";
import UTIL from "../../../utils/util";
import create from '../../../utils/omi/create'
import store from '../../../store/index'
create(store,{

  /**
   * 页面的初始数据
   */
  data: {
      height: 64, //header高度
      top: 50, //标题图标距离顶部距离
      scrollH: 0, //滚动总高度
      opcity: 0,
      iconOpcity: 0.5,
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
      let obj = wx.getMenuButtonBoundingClientRect();
      this.setData({
          width: obj.left,
          height: obj.top + obj.height + 8,
          top: obj.top + (obj.height - 32) / 2
      }, () => {
          wx.getSystemInfo({
              success: (res) => {
                  this.setData({
                      scrollH: res.windowWidth
                  })
              }
          })
      });

  },

    //页面滚动执行方式
    onPageScroll(e) {
        let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
        let opcity = scroll / this.data.scrollH;
        if (this.data.opcity >= 1 && opcity >= 1) {
            return;
        }
        this.setData({
            opcity: opcity,
            iconOpcity: 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
        })
    },
    back: function () {
        wx.navigateBack()
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