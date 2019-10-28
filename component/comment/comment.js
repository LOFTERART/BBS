// component/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

      commentList:{
          type: Array,
          value: [], //不存在此属性时
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

      //    评论列表点击更多评论 当前id和动态的id 知道是给谁的动态评价
      clickMoreComment:function (e) {
          wx.navigateTo({
              url: '/homeSub/pages/moreComment/moreComment?id='+e.currentTarget.dataset.id+'&pid='+e.currentTarget.dataset.pid
          })
      },

      //  评论列表like 点赞
      clickLike:function(e){

          let index = e.currentTarget.dataset.index;
          let is_like= "commentList["+index+"].is_like";
          let like_num= "commentList["+index+"].like_num";

          if(this.data.commentList[index].is_like){
              this.setData({
                  [is_like]: !this.data.commentList[index].is_like,
                  [like_num]: this.data.commentList[index].like_num-1,
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,true,'daily_comment')
          }else {
              this.setData({
                  [is_like]: !this.data.commentList[index].is_like,
                  [like_num]: this.data.commentList[index].like_num+1,
              })
              // this.likeVSNoLikeComment(e.currentTarget.dataset.id,false,'daily_comment')
          }

      },


      // 评论列表点赞和取消赞
      likeVSNoLikeComment:function(id,isTrue,type){
          let params = {
              id:id,
              like_type:type,
              studio_id:this.store.data.userInfo.studio_id,
              user_id:this.store.data.userInfo.admin_id,
              user_type:this.store.data.userInfo.user_role,
          };

          WXAPI.ZtLike(params).then((res)=>{
              if(isTrue){
                  console.log(1);
              }else {
                  console.log(1);
              }
          })

      },






  }
})
