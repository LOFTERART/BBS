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

        commentList:[],
        NewsList:[],
        placeholders:'写下你的...',
        daily_comment_pid:0,
        reply_user_id:0,//被回复者的userId
        reply_user_type:'', //被回复者的userType


        articleList:[
            {
                address: "阳光花墅",
                tag:'# 结婚注意事项',
                avatar: "https://dcdn.it120.cc/2019/08/22/1643cf11-1778-4c36-a707-646bf89b2f83.png",
                comment: 800,
                content: "明天就要结婚了 亲们给点意见 第一次 有点紧张",
                follow: 0,
                follow_user_id: 3804,
                follow_user_type: "teacher",
                id: 27565,
                image_url_came: [
                    {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                ],
                image_url_came_thumb: [
                    {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                    {url:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg'},
                ],
                is_activating: true,
                is_del: true,
                is_follow: false,
                is_like: true,
                is_parent: false,
                is_top: false,
                like: 10,
                name: "小龙女",
                status: "掌门人",
                timer: '刚刚',
                url: "https://www.meishuquanyunxiao.com/share/daily-view.html?daily_id=27565",
                views: 100,
            }
        ]

    },


    onLoad: function (options) {
        if(app.globalData.iphone){
            this.setData({
                btuBottom:"68rpx",
            })
        }
        this.getZTList(false,options.id);

        this.setData({
            id:options.id
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



    //预览图片
    tapBanner:function(e){
        console.log(e.currentTarget.dataset);

        var newPic=[]
        e.currentTarget.dataset.pics.forEach((item,index)=>{
            newPic.push(item.url)
        })
        wx.previewImage({
            current: e.currentTarget.dataset.pic,
            urls: newPic
        })

    },



    onReachBottom: function () {
        this.setData({
            page: this.data.page + 1
        });
        this. getZTList(true,this.data.id)
    },

    //状态点赞

    clickLikeZT:function(e){
        let is_like= "dailyInfo.is_like";
        let like= "dailyInfo.like";
        if(this.data.dailyInfo.is_like){
            this.setData({
                [is_like]: !this.data.dailyInfo.is_like,
                [like]: this.data.dailyInfo.like-1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,true,'daily')
        }else {
            this.setData({
                [is_like]: !this.data.dailyInfo.is_like,
                [like]: this.data.dailyInfo.like+1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,false,'daily')
        }
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


    // 评论点赞和取消赞
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

    //  新闻点击
    clickImage:function(e){

        wx.navigateTo({
            url: '/homeSub/pages/web/web?url='+encodeURIComponent(e.currentTarget.dataset.url)+'&name='+e.currentTarget.dataset.name
        })

    },


//    点击更多评论
    clickMoreComment:function (e) {
        wx.navigateTo({
            url: '/homeSub/pages/moreComment/moreComment?id='+e.currentTarget.dataset.id+'&pid='+this.data.dailyInfo.id
        })
    },

    clickMore:function(){
      UTIL.toast('待开发')
    },
    clickMoreMessage:function(){
        UTIL.toast('待开发')
    },

    //点击点评
    dp:function(e){
        console.log(1);
        this.setData({
            dPshow: true,
            placeholders:'回复'+this.data.dailyInfo.name+'...'
        });
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