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
            {id:1,image:'https://dcdn.it120.cc/2019/08/22/9815471b-5fe0-496a-8f5e-5cf5ff372eef.jpg',type:'H5',link:'url'},
            {id:2,image:'https://dcdn.it120.cc/2019/08/22/e38b0442-735d-4df7-a3ce-7f9de997dc45.jpg',type:'H5',link:'url'},
            {id:3,image:'https://dcdn.it120.cc/2019/08/22/9815471b-5fe0-496a-8f5e-5cf5ff372eef.jpg',type:'sourceCode',link:''},
            {id:4,image:'https://dcdn.it120.cc/2019/08/22/e38b0442-735d-4df7-a3ce-7f9de997dc45.jpg',type:'H5',link:'url'},
        ],
        //金刚位
        KING:[
            {id:1,name:'商业',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'business'},
            {id:1,name:'交友',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png',type:'business'},
            {id:1,name:'旅游',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'business'},
            {id:1,name:'帮助',image:'https://dcdn.it120.cc/2019/09/26/24362dc4-e21f-466e-9423-efc03156b730.png',type:'business'},
            {id:1,name:'运动',image:'https://dcdn.it120.cc/2019/09/26/ef633ab3-4bf4-47cc-9e47-b12367613398.png',type:'business'}
        ],
        //首页动态列表
        dynamicList:[],
    //    文章
        artList:[],
        scrollList:[],
        homeNews:[],
        active: 0,


    },
    /**
     * 生命周期函数--监听页面加载
     *
     */
    onLoad: function (options) {
        // this.getBanner(this.store.data.userInfo);
        this.getDataList(0);
        // this.getKing();

        let arrayList=[]
        for (let i =0;i<=50;i++){
            arrayList.push(
                {
                    id:1,
                    name:'趣知游第一届香山旅游活动召集令',
                    subName:'2019年 河南人在北京同乡会',
                    tags:'#免费 #旅游 #香山 #吃喝玩乐 #一日游',
                    price:99, //现价
                    originalPrice:199, //原价
                    image:'https://dcdn.it120.cc/2019/10/22/9043ba2f-d4a2-4934-a4d3-acd6d5e8e0e6.jpg',
                    memNum:10, //已报名成员
                    totalNum:100, //总成员
                    status:{color:'#ff7900',desc:'进行中'},  //动态当前状态    未开始 进行中 已结束
                    author: "趣知游",
                    dateAdd: "2019-10-22 14:26:01",
                    dateUpdate: "2019-10-22 14:29:02",
                    views: 10 //浏览量
                },
                {
                    id:2,
                    name:'趣知游第一届香山旅游活动召集令',
                    subName:'2019年 河南人在北京同乡会',
                    tags:'#免费 #旅游 #香山 #吃喝玩乐 #一日游',
                    price:99, //现价
                    originalPrice:199, //原价
                    image:'https://dcdn.it120.cc/2019/10/22/e7d87490-9d84-4433-bbf3-9d61f34b35e2.jpg',
                    memNum:10, //已报名成员
                    totalNum:100, //总成员
                    status:{color:'#ff7900',desc:'进行中'},  //动态当前状态    未开始 进行中 已结束
                    author: "趣知游",
                    dateAdd: "2019-10-22 14:26:01",
                    dateUpdate: "2019-10-22 14:29:02",
                    views: 10 //浏览量
                }
                )
        }

        this.setData({
            dynamicList:arrayList
        })

    },


    clickDy:function(e){
        wx.navigateTo({
          url: '/pages/homeDetail/homeDetail'
        })
        
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