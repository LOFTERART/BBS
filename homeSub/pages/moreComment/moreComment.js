
const WXAPI = require('../../../API/API')
import UTIL from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      placeholders:'写下你的...',

      page: 0, //分页
      pageSize: 1000, //每页显示的个数

      showModalStatus: false,
      isShowBottom:true,  //是否显示底部评论bar

      //楼主信息
      LandlordInfo:[
          {
              specialist:false,
              Auth:'医生认证',
              address:'许昌 陈庄幼儿园',
              avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/icon/touxiang.png?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
              content: "别紧张 都是第一次 😁",
              id:39854,
              pid:29969, //评论动态的id
              is_like: true,
              like_num: 10,
              name: "卢婷",
              status:'环保局',
              Community:'阳光花墅',
              reply_comment: [],
              timer: '刚刚',
              user_id: 39754,
              user_type: "student",
              color:'white'
          }
      ],

      //回复楼主的评论列表

      replyComment:[
          {
              avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/183%2Fpicture%2Fimage%2F8f5e4c4657d191ff93491ba7fef872ae.jpg?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
              content: "像了就不叫画了 这才叫艺术高手",
              id: 39894,
              is_like: false,
              like_num: 0,
              memNum:0,
              name: "卢婷",
              reviewers: "张三",
              timer: '1天前',
              user_id: 21110,
          },
          {
              avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/183%2Fpicture%2Fimage%2F8f5e4c4657d191ff93491ba7fef872ae.jpg?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
              content: "像了就不叫画了 这才叫艺术高手",
              id: 39894,
              is_like: false,
              like_num: 0,
              memNum:0,
              name: "卢婷",
              reviewers: "张三",
              timer: '1天前',
              user_id: 21110,
          }
      ]



  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      console.log(options);
      // this.getList(options.id)



  },

    //点击评论

    btnCmt: function() {
        this.setData({
            showModalStatus: true,
            isShowBottom:false,
            placeholders:'@'+this.data.commentInfo.name+'...'
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
    //收藏
    collection: function () {
        this.setData({
            isCollection: !this.data.isCollection
        }, () => {
            if (this.data.isCollection) {
                UTIL.toast("收藏成功！");
            }
        })
    },



    clickZTMore:function(){
        UTIL.toast('待开发')
    },



  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */

})