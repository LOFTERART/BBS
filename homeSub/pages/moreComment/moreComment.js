import CONFIG from "../../../config";
const app = getApp()
const WXAPI = require('../../../API/API')
import create from '../../../utils/omi/create'
import store from '../../../store/store'
import Toast from "../../../miniprogram_npm/vant-weapp/toast/toast";
create(store,{

  /**
   * 页面的初始数据
   */
  data: {
      isShowBottom:true,
      dPshow: false, //点评show
      placeholders:'写下你的...',
      daily_comment_pid:0,
      reply_user_id:0,//被回复者的userId
      reply_user_type:'', //被回复者的userType



      page: 0, //分页
      pageSize: 1000, //每页显示的个数
      replyComment:[],

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if(app.globalData.iphone){
          this.setData({
              btuBottom:"68rpx",
          })
      }
      console.log(options);
      this.getList(options.id)

      this.setData({
          pid:options.pid,
          id:options.id
      })

  },


    clickZTMore:function(){
      Toast('待开发')
    },



    //底部点击点评
    dp:function(e){
        this.setData({
            dPshow: true,
            fatherId:this.data.commentInfo.id,
            reply_user_type:this.data.commentInfo.user_type,
            reply_user_id:this.data.commentInfo.user_id,
            placeholders:'回复'+this.data.commentInfo.name+'...'
        });
    },

    //更多评论里面的消息图标为回评功能
    clickMoreMessage:function(e){
        console.log(e.currentTarget.dataset);
        this.setData({
            dPshow:true,
            fatherId:this.data.commentInfo.id,
            placeholders:'回复'+e.currentTarget.dataset.name+"...",
            reply_user_type:e.currentTarget.dataset.rutype,
            reply_user_id:e.currentTarget.dataset.ruid,
        })

    },


    //发表评价
    clickFb:function(){

        let params = {
            studio_id:this.store.data.userInfo.studio_id,
            user_id:this.store.data.userInfo.admin_id,
            user_type:this.store.data.userInfo.user_role,
            id:this.data.pid,  // 状态id 一级和二级评论都用到
            daily_comment_pid:this.data.fatherId,
            content:this.data.ly,

            reply_user_id:this.data.reply_user_id,
            reply_user_type:this.data.reply_user_type,
        };

        WXAPI.ArtZTPL(params).then((res)=>{
            console.log(res);
            this.setData({
                dPshow: false,
                placeholders:'写下你的...'
            });
            Toast('评论成功~');
        })


    },









    //取消
    clickQx:function(){
        this.setData({
            dPshow:false
        })
    },

    //文字点评获取输入文字
    onGetValue(event) {
        // event.detail 为当前输入的值
        this.setData({
            ly:event.detail.value
        })
    },
    //    底部按钮点击

    clickBottom:function (e) {
        //点赞
        console.log(1);

    },


    //获取状态
    getList:function(id){
        let params = {
            id:id,
            page:this.data.page,
            limit:this.data.pageSize,
            studio_id:this.store.data.userInfo.studio_id,
            user_id:this.store.data.userInfo.admin_id,
            user_type:this.store.data.userInfo.user_role,
        };
        WXAPI.ArtAllComment(params).then((res)=>{
            console.log(res);

            this.setData({
                commentInfo:res.data.comment,
                replyComment:res.data.reply_comment,
            })

        })

    },





    //状态点赞

    clickLikeZT:function(e){
        let is_like= "commentInfo.is_like";
        let like= "commentInfo.like_num";
        if(this.data.commentInfo.is_like){
            this.setData({
                [is_like]: !this.data.commentInfo.is_like,
                [like]: this.data.commentInfo.like_num-1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,true,'daily')
        }else {
            this.setData({
                [is_like]: !this.data.commentInfo.is_like,
                [like]: this.data.commentInfo.like_num+1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,false,'daily')
        }
    },

    //  评论列表like 点赞
    clickLike:function(e){

        let index = e.currentTarget.dataset.index;
        let is_like= "replyComment["+index+"].is_like";
        let like_num= "replyComment["+index+"].like_num";

        if(this.data.replyComment[index].is_like){
            this.setData({
                [is_like]: !this.data.replyComment[index].is_like,
                [like_num]: this.data.replyComment[index].like_num-1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,true,'daily_comment')
        }else {
            this.setData({
                [is_like]: !this.data.replyComment[index].is_like,
                [like_num]: this.data.replyComment[index].like_num+1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,false,'daily_comment')
        }

    },


    // 评论点赞和取消赞
    likeVSNoLikeComment:function(id,isTrue,type){
        let params = {
            id:id,
            user_id:4027,
            studio_id:CONFIG.studioId,
            user_type:'teacher',
            like_type:type
        };

        WXAPI.ZtLike(params).then((res)=>{
            if(isTrue){
                console.log(1);
            }else {
                console.log(1);
            }
        })

    },





    //显示bottom
    onPageScroll: function (ev) {
        var _this = this;
        //判断浏览器滚动条上下滚动
        if (ev.scrollTop <= 0) {
            // 滚动到最顶部
            ev.scrollTop = 0;
            _this.setData({
                isShowBottom:true
            })
        }else if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
            _this.setData({
                isShowBottom:false
            })
        } else {
            _this.setData({
                isShowBottom:true
            })
        }
        //给scrollTop重新赋值
        setTimeout(function () {
            _this.setData({
                scrollTop: ev.scrollTop
            })
        }, 0)
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
      this.getList(this.data.id)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})