import UTIL from '../../../utils/util'
const WXAPI = require('../../../API/API')
const app = getApp()
import create from '../../../utils/omi/create'
import store from '../../../store/store'
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
                id: 40579,
                is_like: true,
                like_num: 10,
                name: "张三",
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


        articleList:[
            {
                community: "阳光花墅",
                address:'许昌 陈庄幼儿园',
                tag:'# 幼儿园瞬间',
                avatar: "https://dcdn.it120.cc/2019/10/26/2b4ab83c-5d78-486e-a25e-ff693f00da4d.png",
                comment: 800,
                content: "拿着放大镜去发现秋天~~",
                follow: 0,
                follow_user_id: 3804,
                follow_user_type: "teacher",
                id: 30903,
                image_url_came: [
                    {url:'https://dcdn.it120.cc/2019/10/26/fd3ab27b-1ddc-4554-93ca-e0bd6e83bd32.jpeg'},
                    {url:'https://dcdn.it120.cc/2019/10/26/9ed88469-5287-481e-ab44-d3287517a020.jpeg'},
                    {url:'https://dcdn.it120.cc/2019/10/26/66ad24e5-fb97-4497-b2a0-202766859b53.jpeg'},
                ],
                image_url_came_thumb: [
                    {url:'https://dcdn.it120.cc/2019/10/26/fd3ab27b-1ddc-4554-93ca-e0bd6e83bd32.jpeg'},
                    {url:'https://dcdn.it120.cc/2019/10/26/9ed88469-5287-481e-ab44-d3287517a020.jpeg'},
                    {url:'https://dcdn.it120.cc/2019/10/26/66ad24e5-fb97-4497-b2a0-202766859b53.jpeg'},
                ],
                is_activating: true,
                is_del: true,
                is_follow: false,
                is_like: false,
                is_parent: false,
                is_top: false,
                like: 10,
                name: "曹阿瞒",
                status: "宝爸",
                timer: '刚刚',
                url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                views: 100,
            },
        ],



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




//    评论列表点击更多评论
    clickMoreComment:function (e) {
        wx.navigateTo({
            url: '/homeSub/pages/moreComment/moreComment?id='+e.currentTarget.dataset.id+'&pid='+this.data.dailyInfo.id
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