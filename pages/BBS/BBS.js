// pages/home/home.js
const WXAPI = require('../../API/API')
import create from '../../utils/omi/create'
import store from '../../store/store'

create(store,{
    context: {
        emitter: create.emitter
    },
    data: {
        //广告
        banners:[],
        //金刚位
        KingList:[],
        page: 0, //分页
        pageSize: 20, //每页显示的个数


        loadingMoreHidden:true,
        isShowTips:'登录查看更多',
        isShowTip:false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getData(false,this.store.data.userInfo);

    },



    //空状态显示登录
    clickLogin:function(){
        wx.navigateTo({
            url: '/mySub/pages/login/login'
        })
    },


    //  获取状态
    getData: function ( append,userInfo) {

        WXAPI.ArtHomeZT({
            studio_id:userInfo.studio_id,
            user_id:userInfo.admin_id,
            user_type:userInfo.user_role,
            page: this.data.page,
            limit: this.data.pageSize
        }).then((res)=>{
            wx.hideLoading()
            //判断是否存在data 是否显示底部加载更多
            if (res.data.length===0) {
                let newData = { loadingMoreHidden: false }
                if (!append) {
                    newData.articleList = []
                }
                this.setData(newData);
                return
            }

            //上拉加载触发
            if (append) {
                this.setData({
                    loadingMoreHidden: true,
                    articleList: [...this.data.articleList,...res.data],
                });
            }else {
                this.setData({
                    loadingMoreHidden: true,
                    articleList: res.data,
                });
            }

        })



    },




    //点击文字跳转详情
    clickDailyContent:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/ztDetail/ztDetail?id='+e.currentTarget.dataset.id
        })

    },


    //预览图片
    tapBanner:function(e){

        var newPic=[]
        e.currentTarget.dataset.pics.forEach((item,index)=>{
            newPic.push(item.url)
        })
        wx.previewImage({
            current: e.currentTarget.dataset.pic,
            urls: newPic
        })

    },

    //  新闻点击
    clickImage:function(e){

        wx.navigateTo({
            url: '/homeSub/pages/web/web?url='+encodeURIComponent(e.currentTarget.dataset.url)+'&name='+e.currentTarget.dataset.name
        })

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
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,true)
        }else {
            this.setData({
                [is_like]: !this.data.articleList[index].is_like,
                [like]: this.data.articleList[index].like+1,
            })
            this.likeVSNoLikeComment(e.currentTarget.dataset.id,false)
        }



    },


    // 评论点赞和取消赞
    likeVSNoLikeComment:function(id,isTrue){
        let params = {
            id:id,
            like_type:'daily',
            studio_id:this.store.data.userInfo.studio_id,
            user_id:this.store.data.userInfo.admin_id,
            user_type:this.store.data.userInfo.user_role,
        };


        WXAPI.ZtLike(params).then((res)=>{
            if(isTrue){
                console.log('like');
            }else {
                console.log('like');
            }
        })

    },


    //发表状态
    clickAdd:function(e){
        if(this.store.data.userInfo.admin_id){
            wx.navigateTo({
                url: '/homeSub/pages/AddBbs/AddBbs'
            })
        }else {
            Toast('请登录之后发表状态')
        }


    },




    //状态置顶
    topZt:function(id){
        WXAPI.ArtztTop({
            user_id:this.store.data.userInfo.admin_id,
            user_type:this.store.data.userInfo.user_role,
            daily_id:id,
        }).then((res)=>{
            Toast({
                message:res.message,
                duration:500
            })
        })

    },



    //状态删除

    DelZT:function(id){
        WXAPI.ArtztDel({
            user_id:this.store.data.userInfo.admin_id,
            studio_id:this.store.data.userInfo.studio_id,
            user_type:this.store.data.userInfo.user_role,
            daily_id:id,
        }).then((res)=>{
            Toast({
                message:res.message,
                duration:500
            })
        })

    },


    //状态用户删除

    DelZTUser:function(userId,userType){
        WXAPI.ArtztDelUser({
            user_id:this.store.data.userInfo.admin_id,
            studio_id:this.store.data.userInfo.studio_id,
            user_type:this.store.data.userInfo.user_role,
            del_user_id:userId,
            del_user_type:userType,
        }).then((res)=>{
            Toast({
                message:res.message,
                duration:500
            })
        })

    },


    //点击更多
    clickMore:function(e){

        var that=this

        if(this.store.data.userInfo.user_role==='teacher'){
            wx.showActionSheet({
                itemList: e.currentTarget.dataset.top?[
                    '取消置顶','删除状态','删除用户',
                ]:[
                    '置顶状态','删除状态','删除用户',
                ],
                success (res) {
                    if(res.tapIndex===0){
                        //取消置顶
                        that.topZt(e.currentTarget.dataset.id)
                    }else if(res.tapIndex===1){
                        //删除状态
                        that.DelZT(e.currentTarget.dataset.id)
                    }else if(res.tapIndex===2){
                        //删除用户
                        that.DelZTUser(e.currentTarget.dataset.Uid,e.currentTarget.dataset.Utype)
                    }
                },
                fail (res) {
                    console.log(res.errMsg)
                }
            })
        }else {
            wx.showActionSheet({
                itemList: [
                    '删除状态'
                ],
                success (res) {
                    if(res.tapIndex===0){
                        //删除状态
                        that.DelZT(e.currentTarget.dataset.id)
                    }
                },
                fail (res) {
                    console.log(res.errMsg)
                }
            })
        }



    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {


        if(this.store.data.userInfo.admin_id){
            this.setData({
                page: 0,
            });
            this.getData(false,this.store.data.userInfo)
        }else {
            wx.navigateTo({
                url: '/mySub/pages/login/login'
            })
        }


    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.setData({
            page: this.data.page + 1
        });
        this.getData(true,this.store.data.userInfo)
    },





})