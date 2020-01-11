import UTIL from '../../../utils/util'
const WXAPI = require('../../../API/API')
import data from '../../../data/data'
const app = getApp()
import create from '../../../utils/omi/create'
import store from '../../../store/index'
create(store,{
    data: {
        dPshow: false, //点评show
        page: 0, //分页
        pageSize: 20, //每页显示的个数


        //评论列表
        commentList:data.commentList,
        NewsList:[],
        placeholders:'写下你想说的话...',
        daily_comment_pid:0,
        reply_user_id:0,//被回复者的userId
        reply_user_type:'', //被回复者的userType

        //详情动态数据
        // articleList:data.dyDetail,
        articleList:[],



        showModalStatus: false,
        isShowBottom:true,  //是否显示底部评论bar




    },


    onLoad: function (options) {
      
        // this.getZTList(false,options.id);
        let arrayList=[];
        arrayList.push(JSON.parse(options.list))
        this.setData({
            id:options.id,
            articleList:arrayList
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
            user_id:this.store.data.userInfo.admin_id,
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