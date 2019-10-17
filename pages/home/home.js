const WXAPI = require('../../API/API')
import create from '../../utils/omi/create'
import store from '../../store/store'
import UTIL from '../../utils/util'
create(store,{
    context: {
        emitter: create.emitter
    },
    data: {
        //广告
        banners:[
            {id:1,image:'https://dcdn.it120.cc/2019/08/22/9815471b-5fe0-496a-8f5e-5cf5ff372eef.jpg'},
            {id:1,image:'https://dcdn.it120.cc/2019/08/22/e38b0442-735d-4df7-a3ce-7f9de997dc45.jpg'},
            {id:1,image:'https://dcdn.it120.cc/2019/08/22/9815471b-5fe0-496a-8f5e-5cf5ff372eef.jpg'},
            {id:1,image:'https://dcdn.it120.cc/2019/08/22/e38b0442-735d-4df7-a3ce-7f9de997dc45.jpg'},
        ],
    //    文章
        artList:[],
        scrollList:[],
        homeNews:[],
        active: 0,

        KING:[
            {id:1,name:'商业',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png'},
            {id:1,name:'交友',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png'},
            {id:1,name:'旅游',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png'},
            {id:1,name:'帮助',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png'},
            {id:1,name:'运动',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png'}
            ]
    },
    /**
     * 生命周期函数--监听页面加载
     *
     */
    onLoad: function (options) {
        // this.getBanner(this.store.data.userInfo);
        this.getDataList(0);
        // this.getKing();
    },


    onChange(event) {
        this.getDataList(event.detail.name);
    },


    jumpLink(e) {
        var src = e.currentTarget.dataset.src
        var name = e.currentTarget.dataset.name

        if(name==='VIP'){
            wx.navigateTo({
              url: '/homeSub/pages/UserVIP/UserVIP'
            })
        }else {
            UTIL.toast('待开发')
            if (!src) return
            wx.navigateTo({
                // url: src+'&name='+name
                url: '/homeSub/pages/NewsList/NewsList'
            })

        }
        
    },

    getDataList:function(cid){
        WXAPI.ArtMingYueHomeList(
            {
                cid:cid
            }
        ).then((res)=>{
            this.setData({
                artList:res.data
            })
        })
    },

    // 美术世界banner
    getBanner:function(userInfo){

        WXAPI.ArtMingYueBanner({
            type:'home'
        }).then((res)=>{
            this.setData({
                banners:res.data.top_carousels,
                scrollList:res.data.middle_carousels,
                homeNews:res.data.homeNews,
            })
        })

    },


    //KING
    getKing:function(){

        WXAPI.ArtMingYueKing().then((res)=>{
            this.setData({
                KING:res.data
            })
        })

    },

    //  新闻点击
    clickDetail:function(e){
        // UTIL.toast('待开发')
        console.log(e.currentTarget.dataset);
        wx.navigateTo({
            url: '/mySub/pages/web/web?url='+decodeURIComponent(e.currentTarget.dataset.link)
        })

    }


})