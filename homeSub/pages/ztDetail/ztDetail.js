import UTIL from '../../../utils/util'
const WXAPI = require('../../../API/API')
const app = getApp()
import create from '../../../utils/omi/create'
import store from '../../../store/store'
import data from '../../../data/data'
create(store,{
    data: {
        dPshow: false, //点评show
        page: 0, //分页
        pageSize: 20, //每页显示的个数


        //评论列表
        commentList:[
            {

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
                color:'#f7f7f7'
            },
            {

                avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/icon/touxiang.png?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
                content: "哇 新娘子好漂亮~",
                id: 40579,
                pid:30903, //评论动态的id
                is_like: true,
                like_num: 10,
                name: "李四",
                status:'环保局',
                Community:'阳光花墅',
                reply_comment: [],
                timer: '刚刚',
                user_id: 39754,
                user_type: "student",
                color:'rgba(245,242,217,1)'
            },
            {

                avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/icon/touxiang.png?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
                content: "哈哈  恭喜恭喜 沾沾喜气 吃喜糖",
                id: 40579,
                pid:30903, //评论动态的id
                is_like: true,
                like_num: 10,
                name: "小明",
                status:'环保局',
                Community:'阳光花墅',
                reply_comment: [],
                timer: '刚刚',
                user_id: 39754,
                user_type: "student",
                color:'rgba(231,245,236,1)'
            },
            {

                avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/icon/touxiang.png?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
                content: "别紧张 都是第一次 😁",
                id: 40579,
                pid:30903, //评论动态的id
                is_like: true,
                like_num: 10,
                name: "小花",
                status:'环保局',
                Community:'阳光花墅',
                reply_comment: [],
                timer: '刚刚',
                user_id: 39754,
                user_type: "student",
                color:'rgba(207,243,223,1)'
            },

            {

                avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/icon/touxiang.png?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
                content: "别紧张 都是第一次 😁",
                id: 40579,
                pid:30903, //评论动态的id
                is_like: true,
                like_num: 10,
                name: "小狗",
                status:'环保局',
                Community:'阳光花墅',
                reply_comment: [],
                timer: '刚刚',
                user_id: 39754,
                user_type: "student",
                color:'rgba(234,242,246,1)'
            },
            {

                avatar: "http://meishuquanyunxiao.img-cn-beijing.aliyuncs.com/icon/touxiang.png?x-oss-process=style/ef92587c6ac8577915de51f9fa6cae2c",
                content: "别紧张 都是第一次 😁",
                id: 40579,
                pid:30903, //评论动态的id
                is_like: true,
                like_num: 10,
                name: "小虫",
                status:'环保局',
                Community:'阳光花墅',
                reply_comment: [],
                timer: '刚刚',
                user_id: 39754,
                user_type: "student",
                color:'rgba(236,233,238,1)'
            }
        ],
        NewsList:[],
        placeholders:'写下你想说的话...',
        daily_comment_pid:0,
        reply_user_id:0,//被回复者的userId
        reply_user_type:'', //被回复者的userType

        //详情动态数据
        articleList:data.dyDetail,



        showModalStatus: false,
        isShowBottom:true,  //是否显示底部评论bar

    },


    onLoad: function (options) {
        if(app.globalData.iphone){
            this.setData({
                btuBottom:"68rpx",
            })
        }
        // this.getZTList(false,options.id);

        this.setData({
            id:options.id
        })




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


    //获取状态列表
    getZTList:function(append,id){
        let params = {
            id:id,
            page:this.data.page,
            limit:this.data.pageSize,
            studio_id:this.store.data.userInfo.studio_id,
            user_id:this.store.data.userInfo.admin_id,
            user_type:this.store.data.userInfo.user_role,
        };
        WXAPI.ArtztDetail(params).then((res)=>{
            //上拉加载触发
            if (append) {
                this.setData({
                    loadingMoreHidden: true,
                    commentList: [...this.data.commentList,...res.data.comment_list],
                });
            }else {
                this.setData({
                    loadingMoreHidden: true,
                    commentList: res.data.comment_list,
                    dailyInfo:res.data.daily,
                    NewsList:res.data.new_list.list,
                });
            }

            //判断是否存在data 是否显示底部加载更多
            if (res.data.comment_list.length === 0) {
                let newData = { loadingMoreHidden: false }
                if (!append) {
                    newData.commentList= []
                }
                this.setData(newData);
                return
            }


        })


    },





    onReachBottom: function () {
        this.setData({
            page: this.data.page + 1
        });
        this. getZTList(true,this.data.id)
    },




    //点击评论

    btnCmt: function() {
        this.setData({
            showModalStatus: true,
            isShowBottom:false,
            placeholders:'@'+this.data.articleList[0].name+'...'
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
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,true,'daily_comment')
        }else {
            this.setData({
                [is_like]: !this.data.commentList[index].is_like,
                [like_num]: this.data.commentList[index].like_num+1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,false,'daily_comment')
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




//    评论列表点击更多评论 当前id和动态的id 知道是给谁的动态评价
    clickMoreComment:function (e) {
        wx.navigateTo({
            url: '/homeSub/pages/moreComment/moreComment?id='+e.currentTarget.dataset.id+'&pid='+e.currentTarget.dataset.pid
        })
    },



    //    底部按钮点击

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        this.setData({
            page: 0
        });
        this.getZTList(false,this.data.id);
    },


})